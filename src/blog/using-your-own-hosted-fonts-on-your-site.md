---
title: Using Your Own Hosted Fonts on Your Site
description: How to use fonts hosted on your own hosting account or server for your website instead of importing Google Fonts.
date: 2025-09-29
tags: post
---

For the longest time, I used to use [Google Fonts](https://fonts.google.com) to serve custom fonts to my website. But then I started hearing about how using Google Fonts to serve custom fonts could be slowing my sites down, and I wondered how I could mitigate that. This article from [Capital Numbers](https://www.capitalnumbers.com/blog/self-hosting-vs-google-fonts/) does a great job of explaining what you can do and why you should do it. 

If you're in the crowd of TLDR, the basic gist of the article is that it is up to you whether you choose to import/link Google Fonts and if you use the pre-connect solution or if you want to do what I did, which is host your fonts on your website. But... how do you do that?

## Grab Your Fonts
First, grab your fonts. You need to be sure they are legal for you to use on the web - so if you're purchasing custom fonts from a website, make sure the license you're receiving includes web usage. You can also download the fonts themselves from Google Fonts, as we know those are licensed for web use. You *may* be able to download fonts from Adobe Fonts if you have a subscription but as I don't subscribe to Adobe products, I don't know, and even if you can download them, I don't know if they are licensed for web use. 

## Convert Your Fonts
Now that you have your fonts, you'll see that they are quite likely in TTF or True Type Format. That's all well and good if you're installing them on your computer, but if you're putting them on the web to use in your website, you'll need to convert them to WOFF or WOFF2. But how?

Well, the easiest way I've found is to go to [CloudConvert](https://cloudconvert.com/woff-converter) and add the files in, then convert them to either WOFF or WOFF2. Usually I convert them to both, but you can do one or the other. 

## Use Your Fonts
Ok, you have your converted fonts, but how do you use them? Well, first, put them in a folder in your website's directory. I tend to put them in a folder called "fonts". I use the 11ty Static Site Generator, so my folder structure for where I put the fonts is is usually something like: 
site-name<br>
--src<br>
---assets<br>
---css<br>
---fonts **<- fonts go here**<br>
---_includes

You'll be calling your fonts in your CSS file... depending on where your CSS file lives in your document tree, you may need to adjust your path. The code to do this is as follows:

<pre><code>
@font-face {
	font-family: 'Font Name';
	src: url('/folder-where-your-font-lives/font.woff2') format(wofff2);
	font-style: normal;
	font-weight: normal;
	font-display: swap;
	}
</code></pre>

Now, let's see what this looks like for a specific font. I have Montserrat converted to WOFF2 for a website I'm working on. I have it in regular, italic, and semi-bold. Here is how the declarations will look:

<pre><code>
@font-face {
	font-family: 'Montserrat';
	src: url('/fonts/Montserrat.woff2') format(woff2);
	font-style: normal;
	font-weight: normal;
	font-display: swap;
	}

@font-face {
	font-family: 'Montserrat';
	src: url('/fonts/Monsterrat-Italic.woff2') format(woff2);
	font-style: italic;
	font-weight: normal;
	font-display: swap;
	}
	
@font-face {
	font-family: 'Montserrat';
	src: url('/fonts/Monsterrat-SemiBold.woff2') format(woff2);
	font-style: normal;
	font-weight: 600;
	font-display: swap;
	}
</code></pre>

As you can see, we have three declarations for one font. Why? Because each one has different parameters for font-style and font-weight. Montserrat is normal for both. Montserrat Italic is italic for font-style, but normal for font-weight. And Montserrat Semi Bold is normal for font-style, but 600 for font-weight. 

All of them are font-display: swap, which basically just means that if there is a moment where they haven't yet loaded, a fall-back font will be displayed if one is set - otherwise it will display browser default fonts. This is to ensure that even if the font hasn't yet loaded for some reason, your text will still appear to your users. 

I realize this trick isn't new, but I'm putting this out there for those who might not know about it yet. I just learned about it a few months ago and I've been coding websites since HTML4.01 was the standard! 

If you have any questions, feel free to contact me through the link on the home page of this site!