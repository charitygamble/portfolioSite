---
layout: layouts/post.njk
title: My Experience Using Gemini Code
description: I used Gemini Code to create the new version of this site...here's how it went.
date: 2025-09-30
tags:
  - post
---
When I'm on [X](https://x.com/cgambledev), [BlueSky](https://bsky.app/profile/charitygambledev.bsky.social), or [Threads](https://threads.net/charitygamble.dev), it seems like everyone is hyping up "vibe coding" their apps, software, websites, etc.. I'm not a huge fan of using generative AI, but everyone keeps talking about how much it improves their workflow. So, I decided to give the whole "vibe coding" thing a shot.

As a note, a huge part of my resistance to the use of generative AI tools in my workspace is that I'm technically not allowed to use them in my school space. I have used it - usually as a way to clarify concepts. My prompts usually start with "Explain *concept I don't get* to me like I'm five years old" and go from there. But I'm not actually allowed to use it to answer test questions, quiz questions, essay questions, etc. I *can* use it to help find a subject to write a paper on, collect data for a paper, etc., but I can't use it to write the paper.

## Picking an AI Assistant
When I'm on X, BlueSky, or Threads, most of the software/app/web devs are talking about how they use Claude or ChatGPT for their vibe coding assistant. 

Now I've used ChatGPT a couple of times, but since I can only use a few prompts per day as a free user, I vetoed that one. I created an account for Claude, but again, I can only use so many prompts before I'd have to wait for a while to ask more questions or prompt it for more code. I'm not a fan of Copilot - whether Microsoft or GitHub, so I vetoed that one. Besides, I literally switched from VS Code to [VSCodium](https://vscodium.com) just to get away from Copilot. 

I decided to see what kind of extensions VSCodium had in the library. I saw there was an extension for [Gemini](https://gemini.google.com) and since I actually use Gemini quite a bit (a year of free Pro doesn't hurt), I decided to give it a try. 

## I Have an Assistant, Now What?
Well, now I have an assistant, what do I do with it?

First, I set up a new Eleventy project - initialized the folder as a local Git repository, created my npm init file, installed Eleventy 4.0.0 as a dev dependency. I set up my .eleventy.js file, the index.njk file, and then the style.css file. Once that was done, I started asking Gemini to do things.

## The Site Building Process

The first thing I asked Gemini to do was to use the existing index.njk and style.css files to create the boilerplate HTML template and create the sideways navigation bar you see to your left. To my delight, Gemini was able to do so easily, although it created a brand new index.njk and style.css file instead of using the existing ones. Whatever...

Then I asked Gemini to create a color scheme for both light and dark modes. So it did. But only in black/white/gray for light mode and dark blues for dark mode. I liked the dark mode colors, but for light mode, I wanted some color. So I asked Gemini to change it... and got olive green and white. Ok, we can work with that, I guess.

We went through creating pages, adding content, more Eleventy build errors than I have ever had when coding any website I made by hand. I had to reconstruct the directory/file structure by hand a few times and make some edits to fix things like site titles, links, etc. I had to ask Gemini to fix the errors - multiple times. I also asked Gemini to please use purple instead of olive green because... no thanks. 

But, in the end, we got to the site you see here.

Yes, this site was the one that was basically coded out by Gemini. There were some additions/changes made to the code, but for the most part, the entire thing was coded by Gemini.

## What I Learned
What I've learned from this experience is the following:

### Learn How to Create Good Prompts
Learn how to create good prompts. Be as clear as possible when you create your prompts. The clearer you are when writing your prompts, the more likely your generative AI assistant is to be able to properly help you create what you want.

### Expect Errors
Expect your generative AI assistant to get it wrong. 

Expect that your AI assistant will write JavaScript that works great, but that your code editor's screening for licensing issues will pick up on. Also, expect that no matter how many times your AI assistant re-writes the code, it will either be full of errors or it will still trip your code editor's alarms about licensed code. 

Expect, especially if you are using a static site generator, that you will experience build errors and it will take multiple rounds of your generative AI rewriting code and trying other solutions before it works again. 

### Don't Rely on the AI Alone
You're going to want/need to make changes. It is totally OK to make changes. Add code (just be aware if there are site problems later, your AI assistant will probably mess with it), add CSS styles, create folders, whatever you need to do. 

### It Takes Longer Than You Think
It always seems like the people who talk about using generative AI to help them build sites, apps, etc., are talking about how much faster it is. Now, yes, it *was* faster than it would have been normally. I'm not saying it wasn't.

But it took longer than I thought it would. I think I spent a good three-and-a-half to four hours building the site - and many times I can build sites like this in about that by myself. 

## Conclusion
Would I do this again? Yes - but I wouldn't have Gemini create as much of the site as I did. I would ask Gemini to make navigation menu responsive or to help me set up the toggle for the light and dark modes. But I definitely wouldn't have it create the entire website for me. 

I honestly can't really say the experience was fun, but I can say that it was a learning experience. 