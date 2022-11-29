import auth from "../../../auth/index.js";

function checkAuth (action) {

    function middleware (req, res, next) {
        switch (action) {


            case 'follow':
                auth.check.logged(req);
                next();
                break;

            default:
                next();
                break;
        }
    }

    return middleware;
}

export default checkAuth;