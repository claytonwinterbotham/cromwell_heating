import React, { Component }from 'react';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import withStyles from "@material-ui/core/styles/withStyles";
import layoutPageStyle from "assets/jss/material-kit-react/views/layoutPage.jsx";
const dashboardRoutes = [];


class Layout extends Component {
    render() {
        const { classes, children, ...rest } = this.props;
        return (
            <div>
                <>
                    <Header
                        color="transparent"
                        routes={dashboardRoutes}
                        brand="Cromwell Heating"
                        rightLinks={<HeaderLinks />}
                        fixed
                        changeColorOnScroll={{
                        height: 400,
                        color: "danger"
                        }}
                        {...rest}
                    />
                    <main>{children}</main> 
                </>
            </div>
        )
    }
}

export default withStyles(layoutPageStyle)(Layout)

