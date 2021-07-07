import React from 'react';
import { FooterContainer, FooterSubscription, FooterHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from './FooterElements'
import { Button } from '../../globalStyles';
import {DiGhost} from 'react-icons/di';
import { FaTwitter, FaInstagram, FaLinkedin, FaCodepen, FaDiscord, FaGithub} from 'react-icons/fa';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterHeading>
                <FooterSubText>You can unsubcribe at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="eamil" placeholder="Your Email"/>
                        <Button fontbig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Submit Video</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Twitter</FooterLink>
                        <FooterLink to='/'>CodePen</FooterLink>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Linkedin</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        WH<SocialIcon/>
                    </SocialLogo>
                    <WebsiteRights>WHG © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" arial-label="Github"><FaGithub/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="Codepen"><FaCodepen/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="Discord"><FaDiscord/></SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
            
        
    )
}

export default Footer
