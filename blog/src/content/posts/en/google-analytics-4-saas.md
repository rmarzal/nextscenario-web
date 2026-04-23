---
title: 'How Google Analytics 4 works. GA4 Guide for Saas'
description: 'GA4 is constantly changing and improving, here are the main ideas on how to use this powerful tool in your business.'
slug: 'google-analytics-4-saas'
pubDate: '2023-04-27T15:01:38Z'
updatedDate: '2025-04-25T07:26:02Z'
lang: 'en'
tags: []
heroImage: 'https://nextscenario.com/wp-content/uploads/2023/04/image-5-1.png'
heroAlt: 'How Google Analytics 4 works. GA4 Guide for Saas'
translationOf: ""
author: 'nextscenario'
migratedFrom: 'https://nextscenario.com/google-analytics-4-saas/'
needsReview: false
draft: false
---

Google Analytics 4 (GA4) is a completely new version of the tool that has been built on three services that Google has been working on for the past few years: Firebase Analytics, Google Signals and Google Tag.

## Firebase Analytics

Firebase Analytics introduces the new event-driven data model, which measures in a much more granular and detailed way the behavior of users between web and app. Firebase is the GA4 brain, shares the internal architecture of Firebase Analytics and simplifies the concept of page/screen views through a much more flexible system of events and parameters.

![](https://nextscenario.com/wp-content/uploads/2023/04/image-5-1.png)

## Google Signals

Google Signals measures the cross-device journey of all users who are logged in with their Google account. Google Signals provides cross-device user tracking. Thanks to the integration of Google Signals in Google Analytics 4, all GA4 reports can take advantage of Google's ability to identify our users across multiple access devices, even if they have not logged in to our website/app.

## Google Site Tag (GTAG)

GTAG is a unified library that works as a kind of Google Tag Manager container and allows us to customize the measurement from Google's own interface without the need to modify the tracking code of our digital assets.

![Acerca de la etiqueta de Google | Etiqueta de Google \(gtag.js\) | Google  Developers](https://developers.google.com/tag-platform/images/googletag.gif?hl=es)

Until now **you could work with sessions, attribution, dimensions and conversion** from their own tool. But now all this gets more complicated, and it will be necessary to prepare this data to consume it according to your needs.

Keep calm, in this post we will try to shed some light, and give you possible solutions and set ups.

Thanks to this new architecture we will be able to have a much more accurate view of our audience and their navigation patterns and behavior in our business over multiple visits.

Although it will disrupt the way in which we were used to measure from Universal Analytics. In this guide we will learn about some of the changes and how to adapt to them.

## GA4 session vs events

One of the main changes in Google Analytics 4 compared to Universal Analytics is its focus on the user.

Previously we were familiar with sessions because in Universal Analytics, most of the reports focused on the visit and pushed us to analyze around it. However, a session is something that someone decided to introduce into the metrics, and without realizing it, it came to dominate the data analysis, without making any sense at all.

Instead, while the Google Analytics Universal event model is based on the session, the Google Analytics 4 data model is based on the events of the actions that a user performs, something that we product people see as more standardized and used by most measurement tools.

## GA session management

Let's take a look at how the session has been managed in the different versions of Google Analytics.

  * Google Analytics Classic originally managed sessions using cookies.
  * With Universal Analytics it started to be done at the server level ([](http://www.google.com/patents/US20130297778)<http://www.google.com/patents/US20130297778>).

But how is a session now managed in Google Analytics 4?

GA4 every time you start a session generates a session ID and a session number. The session_start event automatically generates the session ID so that you can identify the session from which an event originates. For example, two different session IDs are generated when a user has two different sessions on your web site.

  * The session number identifies the number of sessions a user has had up to the current session (for example, a user's third or fifth session on your website).
  * Both the session ID and session number are associated with each event in a session automatically using gtag.js and the Google Analytics for Firebase SDK.

## GA4 Cookies vs Events

Cookies are not over in GA4, cookie (_ga) is still used to store a unique user ID called Client ID. This is athe First-party cookie, i.e. it is associated exclusively with the domain that created it and cannot be shared with other providers, its duration is by default two years, but this expiration is updated with each visit to be extended for another two years.

The Client ID of Universal Analytics and Google Analytics 4 are generated in an analogous way, share the same semantics and are used for the same purpose: to provide a pseudo-anonymous identifier for user measurement.

![Web Design Meets Google Analytics 4: The Death of Cookies and Google's Plan  | Chromatix](https://www.chromatix.com.au/assets/uploads/2020/11/GA4-_-Accuracy-vs-Privacy-Copyrighted.png?x63394)

## Type of Cookies in GA4

Cookies will be categorized according to their function, being the following the ones that can affect us the most:

### Analytical cookies in GA4

  * **Analytical** : Its purpose is to measure user activity and develop navigation statistics.
  * **Advertising** : They are used to control the frequency and content of advertisements. 
  * **Tracking** : They allow storing information about users' browsing in order to show them personalized advertising.
  * **Mandatory or necessary:** They are those necessary for the proper functioning of the website. They are not subject to acceptance
  * **GA4's internal architecture is different** : views have disappeared and given way to data streams, filters have been limited to almost nothing, and many of the usual configuration options are still unavailable or simply different.

The session lasted 30 minutes, the session died at midnight, the session died with the change of campaign. But who decided that? What kind of evil intelligence made us believe that the session was a valid unit of measurement?

## Event definition in GA4 for SAAS

Global site tag (gtag.js) is the latest version of the Google Analytics library for event measurement. It is a JavaScript framework for tagging our measurement projects, and an API thanks to which information is sent to Google's measurement products. The tracking code provided by default in GA4 is based on gtag.js and can be obtained directly from the tool's administration console. We can also implement it from Google Tag Manager.

![](https://nextscenario.com/wp-content/uploads/2023/04/Ga4-events-vs-Universal-Analytics.jpg)

For example, if a user uses two browsers to access the same web page, GA4 will identify two different users.

Therefore, it is not possible to measure between devices based on the Client ID. The user ID is a functionality that can be activated programmatically (it requires programmatic integration) in those websites and apps that include a user registration or login system.

In these cases we can send the user's unique ID to GA as long as it is not personally identifiable information, and this will allow us to identify the same user regardless of the device and browser they are using. Google Signals: This functionality is enabled by default in GA4 and allows us to identify visitors who browse the Internet logged into their Google account and have enabled the option to customize advertising.

All the measurement techniques of Universal Analytics are mixed in GA4 to overcome the limitations of measurement with cookies.

Traditionally in Universal Analytics there were four scopes:

  * **Event or hit** : the dimension value or metric is associated exclusively with an event.
  * **Session** : The value of the dimension or metric is associated with all hits in a given session.
  * **User** : The value of the dimension or metric is associated with all hits in current and future sessions, until the value changes or until the custom dimension becomes inactive.

## Dimensions in GA4

Dimensions are a set of information associated with a measurable event, a session or a user, and allow us to group data and can be used to segment data within an analysis. In GA4, the traffic acquisition dimensions are split to offer a dual view of the origin of our traffic: the first will tell us about how the user discovered us, and the second about the origin of each of their sessions.

![](https://nextscenario.com/wp-content/uploads/2023/04/Untitled-8-1024x425-1.png)

Dimensions allow us to group data and can be used to segment data within an analysis. Some dimensions will tell us about countries, ages….

What we will not be able to create in GA4 are custom dimensions of session scope. This is not a big problem either because we can replace them with dimensions from another scope.

In Universal Analytics, we were used to working with session-level dimensions: such as media, channel, source or campaign. We had internalized that these dimensions allowed us to know the origin of our sessions.

Now they tell us the origin of new users, i.e. the origin of our users when they visited us for the first time. In the user's successive sessions, the value of the dimension will not change. An example can be the dimension First user medium.

(We can see it in the image above)

In GA4 it is possible to choose to analyze one or another dimension depending on our needs. **First User Medium will be our dimension** when we want to analyze our actions based on brand discovery.

**Session Medium** will be the dimension we will choose when we want to analyze the total volume of traffic generated by each channel.

## Attribution in Google Analytics 4

In terms of attribution metrics, GA4 helps us to understand the ability to capture new leads and the effectiveness of our loyalty actions. The new user metric reflects the number of users who have interacted with our website or launched our app for the first time, while the returning user metric indicates users who return to our website or app, i.e. they have already logged in at least once before this visit.

![](https://nextscenario.com/wp-content/uploads/2023/04/image-4-1.png)

GA4 also offers the dual user/session view in its source dimensions:

▶ First User Source: Source of user uptake on their first visit.

▶ Session Source: Source of session acquisition.

Acquisition metrics help us to understand the capacity to capture new potential customers and the effectiveness of our loyalty actions:

  * **New Users** : Reflects the number of users who have interacted with our website or started our application for the first time. To calculate this metric GA4 takes into account the first_open or first_visit event, which is generated only in the first interaction of a user with a digital asset. These events belong to GA4's family of automatic events that are automatically collected by the tool.
  * **Returning Users** : Indicates users who return to our website or app, i.e. they have already logged in at least once before this visit. If you don't find this metric in the lifecycle reports, don't get upset, they are not there. You will be able to activate it and use it within Explorer.
  * **Users** : Number of unique users who have interacted with our website or application during a period of time whose value is greater than zero seconds. At this point we should keep in mind how we are measuring our users in GA4.

Let's pose a paradox: if we try to add up the number of new visitors and recurring visitors for a period of time, we will see that their sum is always greater than the number of users for the period.

How is this possible?

The explanation is simple. The same user can behave as a new and a returning visitor as well.

This is part of the miracle of analytics where one and one does not always add up to two.

In GA4 there are no more page views, all user interactions are translated into events. In this case we have a page_view event that is triggered through the gtag config function, through the Google Analytics 4 configuration tag in Google Tag Manager or through Firebase for mobile apps.

Some Universal Analytics page view attributes have their equivalents in Google Analytics 4:

▶ **Page_title:** Title of the page.

▶ **Page_location** : Complete URL of the page, including the domain. For example: «[](https://example.com/hellogoogle/%C2%BB)[https://example.com/hellogoogle/»](https://example.com/hellogoogle/%C2%BB).

▶** Page_referer** : URL of the page of the previous page. For example:

In an application we do not have pages, but screens. In the Google Analytics 4 properties, a screen_view event is triggered every time a user views a screen.

Each analytics tool defines a session in a particular way. In fact, sessions in UA and GA4 are calculated slightly differently, so we should not find it strange that our acquisition metrics vary from our historical data. In GA4 the

other new.

▶** Change of origin rule** : Contrary to what happens in Universal Analytics, where the change of the origin of a user generates a new session, in GA4 this does not happen under any circumstances. That is, when the campaign or source changes in the middle of the session, a new session is not started.

In this document we have explained how Google Analytics 4 works, a completely new version of the tool that has been built on three services that Google has been working on for the last few years: Firebase Analytics, Google Signals and Global site tag (gtag).

We also talked about attribution in GA4, which helps us understand the ability to capture new leads and the effectiveness of our loyalty actions.

It is undoubtedly a paradigm shift in measurement, which may lead us to lose some of the information we already had about our users. Now it will be necessary to migrate that data to GA4 and build your own reports, in which we have different options:

  * Continue using GoogleA4 and have them perform the migration for us.
  * Move to other tools and/or lose the data.
  * Migrate the raw data to our own database or data lake.

In this post you can see how to do this migration:

[How to export data from Google analytics](/?p=10209)

In addition, you will need to make a set up to build your dimension and attribution models, something we can help you with at **Next Scenario.**

[Learn more about Nextscenario Business data Tool](https://nextscenario.com/)
