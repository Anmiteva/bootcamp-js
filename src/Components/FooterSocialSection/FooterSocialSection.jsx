import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import './FooterSocialSection.scss';

const FooterSocialSection = () => {

    return <div className="social-nets">
                <a href="https://www.facebook.com/profile.php?id=100090250816806" target="_blank" rel="noreferrer">
                <FaFacebookF className="social-icon"/>
                </a>
                <a href="https://www.twitter.com/RestaurantElix1" target="_blank" rel="noreferrer">
                <FaTwitter className="social-icon"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon"/>
                </a>
                <a href="https://www.pinterest.com/elixir_restaurant/" target="_blank" rel="noreferrer">
                <FaPinterest className="social-icon"/>
                </a>
           </div>
}

export default FooterSocialSection;