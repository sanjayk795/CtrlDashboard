// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    "production": false,
    "api_url": 'http://localhost:8000/assets/mock',
    "/report-availability/off-price": '/report-availability/off-price.json?date=',
    "/report-availability/full-price": '/report-availability/full-price.json?date=',
    "/report-availability/supply-chain": '/report-availability/supply-chain.json?date=',
    "/report-availability/sales": '/report-availability/sales.json?date=',
    "login_path": '/users/login.json',
    "login_auth_path": '/users/user.json'
};
