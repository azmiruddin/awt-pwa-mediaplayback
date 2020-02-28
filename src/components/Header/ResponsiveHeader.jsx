import React, { Component } from 'react';
import styled from 'styled-components';
import { Offline, Online } from 'react-detect-offline';
import {createNotification} from '../../managers/NotificationManager';
// import { SideBar } from "./SideBar";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const StyledNavbar = styled(Navbar)`
  background-color: maroon !important;
`;

export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleConnectionChange = (connectionChange) => {
    if(connectionChange === true) {
      return createNotification(
        'success',
        'Application Online',
        'Connection restored. The application is now online.'
      );
    }
    return createNotification(
      'error',
      'Application Offline',
      'Connection closed. The application is now offline.'
    );
  }

  render() {
    return (
      <div class="prs_navigation_main_wrapper">

    <div class="container-fluid">
			<div id="search_open" class="gc_search_box">
				<input type="text" placeholder="Search here"/>
				<button><i class="fa fa-search" aria-hidden="true"></i>
				</button>
			</div>
			<div class="prs_navi_left_main_wrapper">
				<div class="prs_logo_main_wrapper">
					<a href="/">
						{/* <img src="images/header/logo.png" alt="logo" /> */}
						<img src="images/logo/profile_icon.png" alt="logo" style={{width: "17%"}}/>
					</a>
				</div>
        <div style={{paddingLeft: "30%", marginTop: "5%", marginLeft: "11%" }}>
            <span style={{color: "white"}}>
              Connection Status: </span>
            <Offline polling={{ enabled: true, interval: 500 }} onChange={this.handleConnectionChange}>
              <span className="color-red"><strong> OFFLINE</strong></span>
            </Offline>
            <Online polling={{ enabled: true, interval: 500 }}>
              <span className="color-green"  style={{color: "greenyellow"}} onChange={this.handleConnectionChange}> <strong>ONLINE</strong></span>
            </Online>
        </div>
				<div class="prs_menu_main_wrapper">


				</div>
			</div>
			<div class="prs_navi_right_main_wrapper">
      
				<div class="prs_slidebar_wrapper">
					<button class="second-nav-toggler" type="button">
						<img src="images/header/bars.png" alt="bar_png"/>
					</button>
				</div>
				<div class="prs_top_login_btn_wrapper">
       
					<div class="prs_animate_btn1">
            
                


						{/* <ul>
							<li><a href="#" class="button button--tamaya" data-text="sign up" data-toggle="modal" data-target="#myModal"><span>sign up</span></a>
							</li>
						</ul> */}
					</div>
				</div>
				
			</div>
			<div id="mobile-nav" data-prevent-default="true" data-mouse-events="true">
				<div class="mobail_nav_overlay"></div>
				<div class="mobile-nav-box">
					<div class="mobile-logo">
						<a href="/" class="mobile-main-logo">
						<span>PWA AWT</span>
						</a>	
						<a href="#" class="manu-close">X</a>
					</div>
					<ul class="mobile-list-nav">
						<li><a href="/home">PLAYLIST</a>
						</li>
						<li><a href="/downloads">MY DOWNLOADS</a>
						</li>
						<li><a href="/howto">HOW TO</a>
						</li>
						{/* <li><a href="gallery.html">GALLERY</a>
						</li>
						<li><a href="blog_single.html">BLOG</a>
						</li>
						<li><a href="contact.html">CONTACT</a>
						</li> */}
					</ul>
				
					
					<div class="prs_top_login_btn_wrapper prs_slidebar_searchbar_btn_wrapper">
						<div class="prs_animate_btn1">
							{/* <ul>
								<li><a href="#" class="button button--tamaya" data-text="sign up" data-toggle="modal" data-target="#myModal"><span>sign up</span></a>
								</li>
							</ul> */}
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
        
        /* <StyledNavbar color="dark" dark expand="md">
          <NavbarBrand href="/">AWT PWA </NavbarBrand>
          <span style={{marginLeft:"56%",color: "white"}}>Connection Status: 
          <Offline polling={{ enabled: true, interval: 500 }}>
            <span className="color-red"><strong> OFFLINE</strong></span>
          </Offline>
          <Online polling={{ enabled: true, interval: 500 }}>
            <span className="color-green"> <strong>ONLINE</strong></span>
          </Online>
          </span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Online polling={{ enabled: true, interval: 500 }}>
                <NavItem>
                  <NavLink href="/home">PLAYLIST</NavLink>
                </NavItem>
              </Online>
              <NavItem>
                <NavLink href="/downloads">MY DOWNLOADS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/howto">HOW TO</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </StyledNavbar> */
        /* <SideBar> */
          /* </SideBar> */
      // </div>
    );
  }
}
