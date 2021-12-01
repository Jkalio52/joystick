import { afterAll, afterEach, beforeAll, expect, jest, test } from '@jest/globals';
import { mockRequest, mockResponse } from 'jest-mock-req-res';
import { killPortProcess } from "kill-port-process";
import assertRoutesDoNotExistInRegexes from '../tests/lib/assertRoutesDoNotExistInRegexes';
import assertRoutesExistInRegexes from '../tests/lib/assertRoutesExistInRegexes';
import setAppSettingsForTest from '../tests/lib/setAppSettingsForTest';
import startTestDatabase from '../tests/lib/databases/start';
import stopTestDatabase from '../tests/lib/databases/stop';
import getRouteRegexes from '../tests/lib/getRouteRegexes';

jest.mock('../../node_modules/crypto-extra', () => {
  return {
    randomString: () => 'abc1234',
  };
});

jest.mock('../../node_modules/bcrypt', () => {
  return {
    hashSync: () => 'hashed$password',
    compareSync: () => {
      return true;
    },
  };
});

jest.mock('../../node_modules/dayjs', () => {
  const _dayjs = jest.requireActual('../../node_modules/dayjs');
  const _utc = jest.requireActual('../../node_modules/dayjs/plugin/utc');
  _dayjs.extend(_utc);

  return () => _dayjs('2022-01-01T00:00:00.000Z');
});

const dayjs = (await import('dayjs')).default;
const app = (await import('./index')).default;
const generateId = (await import('../lib/generateId')).default;

global.joystick = {
  settings: {
    config: {
      databases: [{
        "provider": "mongodb",
        "users": true,
        "options": {}
      }],
    },
  },
};

describe('index.js', () => {
  beforeAll(async () => {
    process.env.PORT = 3600;

    setAppSettingsForTest({
      "config": {
        "databases": [
          {
            "provider": "mongodb",
            "users": true,
            "options": {}
          }
        ],
        "i18n": {
          "defaultLanguage": "en-US"
        },
        "middleware": {},
        "email": {
          "from": "",
          "smtp": {
            "host": "",
            "port": 587,
            "username": "",
            "password": ""
          }
        }
      },
      "global": {},
      "public": {},
      "private": {}
    });
  
    await startTestDatabase('mongodb');
  });

  afterEach(async () => {
    await killPortProcess(process.env.PORT);
  });

  afterAll(async () => {
    await stopTestDatabase();
  });

  test('registers render-related routes', async () => {
    const instance = await app({});
    
    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);
      assertRoutesExistInRegexes(routeRegexes, [
        '/_joystick/heartbeat',
        '/_joystick/utils/process.js',
        '/_joystick/index.client.js',
        '/_joystick/index.css',
        '/_joystick/ui',
        '/_joystick/hmr/client.js',
      ]);
    }
  });

  test('registers accounts-related routes', async () => {
    const instance = await app({});
    
    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);
      assertRoutesExistInRegexes(routeRegexes, [
        '/api/_accounts/login',
        '/api/_accounts/logout',
        '/api/_accounts/signup',
        '/api/_accounts/recover-password',
        '/api/_accounts/reset-password',
      ]);
    }
  });

  test('registers getter routes', async () => {
    const instance = await app({
      api: {
        getters: {
          posts: {
            input: {},
            get: () => {},
          },
          post: {
            input: {},
            get: () => {},
          },
        },
      },
    });
    
    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);
      assertRoutesExistInRegexes(routeRegexes, [
        '/api/_getters/posts',
        '/api/_getters/post',
      ]);
    }
  });

  test('registers setter routes', async () => {
    const instance = await app({
      api: {
        setters: {
          createPost: {
            input: {},
            set: () => {},
          },
          updatePost: {
            input: {},
            set: () => {},
          },
        },
      },
    });
    
    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);
      assertRoutesExistInRegexes(routeRegexes, [
        '/api/_setters/createPost',
        '/api/_setters/updatePost',
      ]);
    }
  });

  test('registers custom routes if passed as function', async () => {
    const instance = await app({
      routes: {
        '/latest': () => {},
        '/profile/:_id': () => {},
        '/category/:category/posts': () => {},
      },
    });

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);
      assertRoutesExistInRegexes(routeRegexes, [
        '/latest',
        '/profile/123',
        '/category/tutorials/posts',
      ]);
    }

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }
  });

  test('does not register custom routes if passed as function not set to a function', async () => {
    const instance = await app({
      routes: {
        '/latest': 'function',
        '/profile/:_id': 'function',
        '/category/:category/posts': 'function',
      },
    });

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);
      assertRoutesDoNotExistInRegexes(routeRegexes, [
        '/latest',
        '/profile/123',
        '/category/tutorials/posts',
      ]);
    }

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }
  });

  test('registers custom routes if passed as an object', async () => {
    const instance = await app({
      routes: {
        '/latest': {
          method: 'GET',
          handler: () => {},
        },
        '/profile/:_id': {
          method: 'POST',
          handler: () => {},
        },
        '/category/:category/posts': {
          method: 'PUT',
          handler: () => {},
        },
      },
    });

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);
      assertRoutesExistInRegexes(routeRegexes, [
        '/latest',
        '/profile/123',
        '/category/tutorials/posts',
      ]);
    }
  });

  test('does not register custom routes if passed as an object without a valid method', async () => {
    const instance = await app({
      routes: {
        '/latest': {
          method: 'CAT',
        },
        '/profile/:_id': {
          handler: () => {},
        },
        '/category/:category/posts': {
          method: 'PUT',
          handler: () => {},
        },
      },
    });

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);

      assertRoutesDoNotExistInRegexes(routeRegexes, [
        '/latest',
        '/profile/123',
      ]);

      assertRoutesExistInRegexes(routeRegexes, [
        '/category/tutorials/posts',
      ]);
    }
  });

  test('does not register custom routes if passed as an object without a handler function', async () => {
    const instance = await app({
      routes: {
        '/latest': {
          method: 'GET',
        },
        '/profile/:_id': {
          method: 'POST',
        },
        '/category/:category/posts': {
          method: 'PUT',
        },
      },
    });

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    if (instance?.app?._router) {
      const routeRegexes = getRouteRegexes(instance.app._router.stack);
      assertRoutesDoNotExistInRegexes(routeRegexes, [
        '/latest',
        '/profile/123',
        '/category/tutorials/posts',
      ]);
    }
  });

  test('sets build errors on process', async () => {
    const instance = await app({});
    const testMessage = { id: generateId() };

    process.emit('message', JSON.stringify(testMessage));

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    expect(process.BUILD_ERROR).toEqual(testMessage);
  });

  test('if callback function is assigned to route, it is called as expected', async () => {
    // TODO: Do this for both object-based and function-based routes.
    // TODO: Mock out the req, res objects.
    // TODO: Verify that the callback itself is called (via spy function).
    // TODO: Verify context is properly set on req object.
  });

  test('verify that a /_accounts/authenticated request will return true if passed a valid cookie', async () => {
    const instance = await app({});
    const route = instance?.app?._router?.stack.find((stackItem) => {
      return stackItem?.route?.path === '/api/_accounts/authenticated';
    });

    const req = mockRequest({
      cookies: {
        joystickLoginToken: 'testToken123',
        joystickLoginTokenExpiresAt: dayjs().add(1, 'minute').format(),
      },
    });

    const res = mockResponse();
    const handler = route?.route?.stack[0] && route?.route?.stack[0].handle;
    
    if (handler) {
      handler(req, res, () => {});
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith('{\"status\":200,\"authenticated\":true}');
    }

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }
  });

  test('verify that a /_accounts/authenticated request will return false if passed an invalid cookie', async () => {
    const instance = await app({});
    const route = instance?.app?._router?.stack.find((stackItem) => {
      return stackItem?.route?.path === '/api/_accounts/authenticated';
    });

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    const req = mockRequest({
      cookies: {
        joystickLoginToken: 'testToken123',
        joystickLoginTokenExpiresAt: jest.requireActual('../../node_modules/dayjs')().subtract(1, 'minute').format(),
      },
    });

    const res = mockResponse();
    const handler = route?.route?.stack[0] && route?.route?.stack[0].handle;
    
    if (handler) {
      handler(req, res, () => {});
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.send).toHaveBeenCalledWith('{\"status\":401,\"authenticated\":false}');
    }
  });

  test('verify that a /_accounts/signup request will set a cookie and return a user if passed a valid signup request', async () => {
    const instance = await app({});
    const route = instance?.app?._router?.stack.find((stackItem) => {
      return stackItem?.route?.path === '/api/_accounts/signup';
    });

    if (instance?.server?.close && typeof instance.server.close === 'function') {
      instance.server.close();
    }

    const req = mockRequest({
      body: {
        emailAddress: 'test@test.com',
        password: 'password',
        metadata: {},
      },
    });

    const res = mockResponse();
    const handler = route?.route?.stack[0] && route?.route?.stack[0].handle;
    
    if (handler) {
      await handler(req, res, () => {});
      expect(res.cookie).toHaveBeenCalledWith('joystickLoginToken', 'abc1234', { secure: true, httpOnly: true, expires: dayjs().toDate() });
      expect(res.cookie).toHaveBeenCalledWith('joystickLoginTokenExpiresAt', "2022-01-31T00:00:00Z", { secure: true, httpOnly: true, expires: dayjs().toDate() });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith('{\"_id\":\"abc1234\",\"password\":\"hashed$password\",\"emailAddress\":\"test@test.com\"}');
    }
  });

  // test('verify that a /_accounts/login request will set a cookie and return a user if passed a valid login request', async () => {

  // });

  // test('verify that a /_accounts/logout request deletes the cookie', async () => {

  // });

  // test('verify that a /_accounts/recover-password request attempts to send an email', async () => {

  // });

  // test('verify that a /_accounts/reset-password request sets a cookie and returns the user', async () => {

  // });
});