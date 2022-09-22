import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404: 你来到了没有知识的荒原 - <Link to="/">回到首页</Link>
    </div>
);

export default NotFoundPage;