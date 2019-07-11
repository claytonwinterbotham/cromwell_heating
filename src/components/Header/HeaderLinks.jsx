/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Build, CloudDownload,Phone } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//<FontAwesomeIcon className={} icon={["fal", "fire"]} />

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Our Servces"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Build}
          dropdownList={[
            <Link to="/boilers" className={classes.dropdownLink}>
              <FontAwesomeIcon className={classes.navLink} icon={["fal", "fire"]} />
              Boilers
            </Link>,
            <Link to="/furnaces" className={classes.dropdownLink}>
              <FontAwesomeIcon className={classes.navLink} icon={["fal", "fan"]} />
              Forced Air
            </Link>,
            <Link to="/hotwater" className={classes.dropdownLink}>
              <FontAwesomeIcon className={classes.navLink} icon={["fal", "shower"]} />
              Hot water
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/profile-page" className={classes.navLink}>
         About Us
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login-page" className={classes.navLink}>
          <Button
            round
            color="warning"
            size="sm"
          >
            <Phone /> Contact Us
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
