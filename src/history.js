import { createBrowserHistory } from 'history';
import queryString  from 'query-string';
const history = createBrowserHistory();

export const goToUrl = (pathname, query='') => {
    history.push({
        pathname: pathname,
        search: '?'+queryString.stringify(query)
    });
};

export default history;