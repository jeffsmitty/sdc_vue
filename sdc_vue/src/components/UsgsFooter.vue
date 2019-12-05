<template>
<footer class="footer">
	<div class="tmp-container">
		<!-- .footer-wrap -->
			<!-- .footer-doi -->
			<div class="footer-doi">
				<!-- footer nav links -->
				<ul class="menu nav">
					<li class="first leaf menu-links menu-level-1"><a href="https://www.doi.gov/privacy">DOI Privacy Policy</a></li>
					<li class="leaf menu-links menu-level-1"><a href="https://www.usgs.gov/laws/policies_notices.html">Legal</a></li>
					<li class="leaf menu-links menu-level-1"><a href="https://www2.usgs.gov/laws/accessibility.html">Accessibility</a></li>
					<li class="leaf menu-links menu-level-1"><a href="https://www.usgs.gov/sitemap.html">Site Map</a></li>
					<li class="last leaf menu-links menu-level-1"><a href="https://answers.usgs.gov/">Contact USGS</a></li>
				</ul>
				<!--/ footer nav links -->      
			</div>
			<!-- /.footer-doi -->

			<hr>

		<!-- .footer-utl-links -->
		<div class="footer-doi">
			<ul class="menu nav">
				<li class="first leaf menu-links menu-level-1"><a href="https://www.doi.gov/">U.S. Department of the Interior</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.doioig.gov/">DOI Inspector General</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.whitehouse.gov/">White House</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.whitehouse.gov/omb/management/egov/">E-gov</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.doi.gov/pmb/eeo/no-fear-act">No Fear Act</a></li>
				<li class="last leaf menu-links menu-level-1"><a href="https://www2.usgs.gov/foia">FOIA</a></li>
			</ul>
			</div>			
		<!-- /.footer-utl-links -->
		<!-- .footer-social-links -->
		<div class="footer-social-links">
			<ul class="social">
				<li class="follow">Follow</li>
				<li class="twitter">
					<a href="https://twitter.com/usgs" target="_blank">
						<i class="fa fa-twitter-square"><span class="only">Twitter</span></i>
					</a>
				</li>
				<li class="facebook">
					<a href="https://facebook.com/usgeologicalsurvey" target="_blank">
						<i class="fa fa-facebook-square"><span class="only">Facebook</span></i>
					</a>
				</li>
				<li class="googleplus">
					<a href="https://plus.google.com/112624925658443863798/posts" target="_blank">
						<i class="fa fa-google-plus-square"><span class="only">Google+</span></i>
					</a>
				</li>
				<li class="github">
					<a href="https://github.com/usgs" target="_blank">
						<i class="fa fa-github"><span class="only">GitHub</span></i>
					</a>
				</li>
				<li class="flickr">
					<a href="https://flickr.com/usgeologicalsurvey" target="_blank">
						<i class="fa fa-flickr"><span class="only">Flickr</span></i>
					</a>
				</li>
				<li class="youtube">
					<a href="http://youtube.com/usgs" target="_blank">
						<i class="fa fa-youtube-play"><span class="only">YouTube</span></i>
					</a>
				</li>
				<li class="instagram">
					<a href="https://instagram.com/usgs" target="_blank">
						<i class="fa fa-instagram"><span class="only">Instagram</span></i>
					</a>
				</li>
			</ul>
		</div>
		<!-- /.footer-social-links -->
	</div>
		<!-- /.footer-wrap -->	
</footer>
</template>


<!-- TODO - this is common.css from USGS - remove unneeded footer styles from this scoped css -->
<!-- TODO - remove the fontawesome stuff from css and use the vue package for fontawesome -->
<style scoped>
@charset "UTF-8";
/* CSS Document */

footer, #navbar {
	font-family: 'Source Sans Pro',sans-serif;
	margin: 0;
	position: relative;
}

*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}	

footer, header, main, nav, div {
    display: block;
}

.tmp-container {
	margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.tmp-container a {
	text-decoration: none;
    background: transparent;
}
.tmp-container a:-webkit-any-link {
    cursor: auto;
}
.tmp-container:before, .tmp-container:after {
    content: " ";
    display: table;
}
.tmp-container:after {
    clear: both;
}

hr {
	width: 100%; 
}

/* header (only) nav */
.header-nav {
	background: #00264c;
}

.logo-header img {
	margin-top: 8px;
	margin-bottom: 8px;
	border: 0;
	max-width: 100%;
	height: auto;
}

.header-search form {
  float: right;
  width: auto;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 0;
  margin-left: 0;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.header-search input[type="search"] {
	height: 30px;
	width: 260px;
	margin-top: 18px;
}
.header-search button[type="submit"] {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 15px;
	border: 0;
	color: #666;
	background: transparent;
	padding: 0;
	width: 39px;
	height: 39px;
	margin-top: 21px;
}

input{line-height:normal}
input[type="search"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
input,button{font-family:inherit;font-size:inherit;line-height:inherit}


/* Always float the navbar header */
.navbar-header {
  float: left;
}

/* footer (only) css */

.menu.nav {
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

.nav:before, .nav:after {
   content: none;
}
footer.footer {
	background: #00264c;
	padding-bottom: 0px;
	position: relative;
	width: 100%;
	border-top: 1px solid #E5E5E5;
}

footer.footer .footer-doi {
	padding-right: 0;
	padding-left: 0;
}

footer.footer .footer-doi ul.menu li a {
    padding: 5px 0px;
    color: #ffffff;
    float: left;
    font-size: 12px;
}

footer.footer .footer-doi ul.menu li:first-of-type {
    padding-left: 0px;
}

footer.footer .footer-doi ul.menu li {
    float: left;
    padding-right: 2px;
    padding-left: 5px;
}

footer.footer .footer-doi ul.menu li:after {
    content: "|";
    color: #ffffff;
    float: left;
    padding-top: 5px;
    padding-left: 7px;
    font-size: 12px;
}

footer.footer .footer-doi ul.menu li:last-child:after {
    content: "";
}

footer.footer .footer-wrap .menu.nav a {
	padding: 4px 0px;
	color: #ffffff;
	font-size: 12px;
}

footer.footer .footer-social-links {
	color: #ffffff;
	font-size: 12px;
	padding-right: 0;
}

footer.footer .footer-social-links ul {
    float: right;
	margin-top: 0px;
}

footer.footer .footer-social-links ul li.follow {
    padding-top: 6px;
    padding-right: 5px;
}

footer.footer .footer-social-links ul li {
    float: left;
    height: 24px;
    margin: 0 2px;
    list-style: none;
    list-style-type: none;
}

footer.footer .footer-social-links ul li:last-of-type {
    margin-right: 0px;
}

footer.footer .footer-social-links ul li a i {
	color:#fff;
	font-size: 24px;
}

/* Font Awesome Social Media icons */
/*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
/* FONT PATH
 * -------------------------- */
@font-face {
  font-family: 'FontAwesome';
  src: url('../assets/fonts/fontawesome-webfont.eot');
  src: url('../assets/fonts/fontawesome-webfont.eot') format('embedded-opentype'), url('../assets/fonts/fontawesome-webfont.woff2') format('woff2'), url('../assets/fonts/fontawesome-webfont.woff') format('woff'), url('../assets/fonts/fontawesome-webfont.ttf') format('truetype'), url('../assets/fonts/fontawesome-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
.fa-wrapper {
	position: relative
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-ul {
  padding-left: 0;
  margin-left: 2.14285714em;
  list-style-type: none;
}
.fa-ul > li {
  position: relative;
}
.fa-li {
  position: absolute;
  left: -2.14285714em;
  width: 2.14285714em;
  top: 0.14285714em;
  text-align: center;
}
.fa-search:before {
	content: "\f002";
}
.fa-twitter-square:before {
Content: "\f081";
}
.fa-facebook-square:before {
Content: "\f082";
}
.fa-github:before {
    content: "\f09b";
}
.fa-google-plus-square:before {
	content:"\f0d4"; 
}
.fa-flickr:before {
	content: "\f16e";
}
.fa-youtube-play:before {
    content: "\f16a";
}
.fa-instagram:before {
    content: "\f16d";
}
.only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
[role="button"]{cursor:pointer}

</style>


<style scoped>
body {
  margin: 0;
  padding: 0;
}


.card .cardViewLinksTitle a {
  color: black;
  margin-right: 15px;
}

.breadcrumb {
  margin-bottom: 0px;
}

.navbar {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: #0056b3;
  color: #fff;
  height: 40px;
  font-size: 16px;
  letter-spacing: 0.05rem;
  font-weight: bold;
}

.logo {
  margin-left: 16px;
  float: left;
}

.logo-header img {
  height: 50px;
}

.datasearch {
  margin-left: auto;
  margin-right: auto;
}

.datasearch .searchbox {
  min-width: 400px;
  border-radius: 30px;
  padding: 5px 16px 5px 40px;
}

.datasearch .search-icon {
  padding: 0 10px;
}

.footer hr {
  border-top: 1px solid rgb(255, 255, 255);
}

.suggestionlist {
  color: #424242;
  width: 90%;
  margin-left: 5%;
}

.display {
  display: flex;
  margin-bottom: 100px;
}

.filterHeader {
  font-size: 18px;
  font-weight: bold;
}

.leftSidebar {
  width: 320px;
  height: calc(100% - 50px);
  overflow-y: auto;
  padding: 15px 20px;
  position: fixed;
  left: 0;
  right: 0;
  border-right: 1px solid #f0f0f0;
}

.leftSidebar > div {
  margin: 10px 10px 40px 10px;
}

@media all and (max-width: 768px) {
  .leftSidebar {
    position: fixed;
    z-index: 3;
    background: #fff;
    width: 100%;
    border-right: 0;
    border-bottom: 1px solid #f0f0f0;
    display: none;
  }

  .leftSidebar.active {
    display: block;
  }

  .logo {
    display: none;
  }
}

.author .author-list {
  max-height: 150px;
}

.mainBar {
  width: calc(100% - 320px);
  position: relative;
  left: 320px;
  padding: 10px 30px;
}

@media all and (max-width: 768px) {
  .mainBar {
    width: 100%;
    left: 0;
  }
}

.elipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.result-data {
  margin-top: 10px;
}

.result-data .result-item {
  box-shadow: none;
  border: 1px solid #ccc;
  margin-top: 10px;
  padding: 10px;
  display: block;
  overflow: hidden;
}

.result-data .result-title {
  font-weight: bold;
  clear: both;
  display: block;
  background-color: #efefef;
  color: #0b7185;
  font-size: 18px;
  padding: 5px;
  font-style: italic;
}

.result-data .result-abstract {
  display: block;
}

.result-author {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.star {
  color: gold;
}

.result-data .result-item:hover,
.result-data .result-item:focus,
.result-data .result-item:visited {
  box-shadow: none;
}

.toggle-btn {
  display: none;
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  text-align: center;
  border-radius: 25px;

  color: white;
  width: 200px;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 10px;
  position: fixed;
  bottom: 4rem;
  left: calc(50% - 100px);
  margin: 0 auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 4;
  background: #0b6aff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.toggle-btn:hover {
  color: white;
  background: #0a5de2;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

@media all and (max-width: 768px) {
  .toggle-btn {
    display: block;
  }
}

@media all and (max-width: 420px) {
  .datasearch .searchbox {
    min-width: 300px;
  }
}
</style>