import React from 'react';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {StyledLink, NavigationBar} from '../NavLink.styled';
import { ThreeDots } from 'react-loader-spinner';
// import PropTypes from 'prop-types'

const SharedLayout = () => {
  return (
    <div>
      <Suspense fallback={<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
          />}>
        <header>
            <NavigationBar>
                <StyledLink to='/'> Home</StyledLink>
                <StyledLink to='/movies'> Movies</StyledLink>
            </NavigationBar>
        </header>
        
        <Outlet />
      </Suspense>
    </div>
  )
}

SharedLayout.propTypes = {}

export default SharedLayout;