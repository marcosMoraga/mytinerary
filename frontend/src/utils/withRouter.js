import { useParams, useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core';
export function withRouter(Child) {
    return (props) => {
        const phone = useMediaQuery('(max-width:768px)');
        const id = useParams();
        const navigate = useNavigate();
        return <Child {...props} params={id} phone={phone} navigate={navigate} />;
    }
}
