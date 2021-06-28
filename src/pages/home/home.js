import React from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import Button from 'components/ui/button';

function HomePage() {
    return (
        <div className="home">
            <Link to="/vendors">
                <Button> مشاهده رستورانها </Button>
            </Link>
        </div>
    );
}

export default HomePage;
