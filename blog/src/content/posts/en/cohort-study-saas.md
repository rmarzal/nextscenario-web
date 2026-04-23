---
title: 'Cohort analysis for saas and recurrent business'
description: 'There are three key metrics that define the success of a acqusition strategy of a business: CAC Customer Acquisition Cost, LTV Customer Lifetime Value and…'
slug: 'cohort-study-saas'
pubDate: '2023-11-06T12:50:31Z'
updatedDate: '2025-04-25T07:25:25Z'
lang: 'en'
tags: []
heroImage: 'https://nextscenario.com/wp-content/uploads/2023/09/estudio-cohortes-Saas.webp'
heroAlt: 'Cohort analysis for saas and recurrent business'
translationOf: 'estudio-de-cohortes'
author: 'nextscenario'
migratedFrom: 'https://nextscenario.com/cohort-study-saas/'
needsReview: false
draft: false
---

There are three key metrics that define the success of a acqusition strategy of a business: CAC (Customer Acquisition Cost), LTV (Customer Lifetime Value) and customer retention.

The [CAC](/?p=14123) is easy to calculate, we simply need to calculate the marketing investment among the new customers we have been able to obtain in a given period.

LTV is a slightly more complicated metric, but it is still somewhat simple if you already have measured recurrence. It is calculated by multiplying the gross margin of an order or subscription by the recurrence of customers, i.e. the number of months a customer will stay with us.

The calculation of recurrence is where it gets complicated. Analyzing it correctly requires implementing a cohort analysis, something that many of us know the theory, but is really tedious to calculate. Therefore, in this post I will explain how to perform a cohort analysis and offer you a solution to automate the cohort analysis calculation.

We get a little more technical and start with [cohort modeling](/?p=14697).

## What is a cohort study?

A cohort is a group of clients acquired at a given point in time; for example, the "September 2024" cohort evaluates the behavior of clients acquired in September 2024.

A cohort is a group of customers acquired at a specific point in time; for example, the "September 2023" cohort assesses the behavior of customers acquired in September 2023.

![](https://nextscenario.com/wp-content/uploads/2023/09/estudio-cohortes-Saas.webp)

These cohorts typically measure user and customer behavior, and what percentage of them remain in the subsequent months.

This analysis allows us to "easily" benchmark with other SaaS startups and helps estimate some specific business metrics, such as the Lifetime Value and other unit economics like the LTV/CAC ratio we mentioned earlier.

A cohort analysis is one of the most well-known retention calculation tools, but not everyone knows how to calculate them properly. In this article we will explain how to implement a cohort analysis for Saas, with user customer retention cohorts and customer cohort analysis and we will discuss the specific use case for a Saas.

These cohorts usually measure the behavior of users and customers and what percentage of them remain in the following months of life.

This analysis allows us to "easily" benchmark with other SaaS startups and helps us to estimate some specific metrics of the business model, such as LifetimeValue and other unit economics, like the LTV/CAC ratio we talked about before.

## Common uses of cohort analysis

Within a cohort analysis we can measure:

  * [Churn](https://nextscenario.com/old/es/analisis-churn/) calculation by cohort.
  * MRR gross retention calculation
  * Calculation of net MRR retention.
  * Customer retention rate.

![](https://nextscenario.com/wp-content/uploads/2023/11/tipos-de-analisis-de-cohortes-2-834x1024.png)

As we mentioned, the most common metrics used in SaaS cohort analysis are:

  * [Chuxrn.](/?p=10849)
  * MRR movements. Upgrade, downgrade…
  * Conversion from user to customer.
  * Retention rate, whether for users, customers, or MRR.
  * [Lifetime Value.](/?p=13440)
  * Order repeat rate in an e-commerce…

But…

## **Why can cohort analysis help with Saas retention?**

Let's take an example.

Suppose we changed our software onboarding in January, and in February we noticed an increase in inactive users.

Why did 70% of users acquired in February become inactive the following week, while in January it was only 30%?

Is the new user onboarding launched at the end of January causing issues?

Cohort analysis can help us answer these questions and react promptly, making this analysis highly actionable and allowing us to identify a problem and take steps before it's too late.

## Cohort analsys example **Why is the cohort analysis so crucial for SaaS retention?**

When a SaaS is in its growth phase, it's essential to identify and address pain points in the customer lifecycle. Cohort analyses allow us to do precisely this.

![](https://nextscenario.com/wp-content/uploads/2023/09/analisis-cohortes-saas-1024x707-1-1.png)

Instead of looking at high-level metrics for customer loss or retention, you can focus on specific months and tailor retention efforts accordingly.

Which of these statements is more "actionable"?

  * "Our churn rate has increased by 3%".
  * "Churn is significantly higher in the second month of the customer's lifecycle".

In the second example, we can focus our efforts on understanding what's happening in the second month, engage with the customer cohort at that time, and implement additional actions to retain them at this stage.

Note: Cohorts work best with monthly subscriptions (or shorter intervals). It's essential not to mix annual subscriptions with monthly cohorts.

Apart from looking at the number of customers, we can also check:

  * A cohort's MRR retention, to see if churning customers are from bigger plans, primarily small accounts, or a mix of both. This could help us narrow down the reasons behind increased cancellations.
  * We can also compare the same cohorts by plan to see if customers are being acquired more quickly in one of them.
  * We can also see if they are more likely to cancel in a specific plan. This could help the sales and marketing team double down on promoting the better-performing plan.

Okay, Rubén… all this sounds great, but… how do I do it?

Let's dive in 😉

## Create your cohorts analysis

Explore your data a prevent your churn.

[Sign up](https://nextscenario.com/cohorts-segmentation/)

## How to build a customer cohort analysis

For the analysis of a cohort we need all customer records with the following fields:

  * Order id or Subscription id
  * User id or customer id.
  * Plan id.
  * Revenue plan.
  * Order date.

It is very important to set up a good organization in the pricing plans in order to have unified information.

If we do not have all the fields preconfigured, with subscription id, user id and order date we can start a simpler cohort analysis.

How to analyze a cohort analysis for churn calculations.

Okay, now that we have seen how to work with the data, let's see how to analyze it.

The most common form of cohort analysis is presented in tabular form, with some standard features:

![](https://nextscenario.com/wp-content/uploads/2023/11/implementacion-del-cohorts-1024x721.png)

  * Each row represents a cohort of users, with the cohort name in the first column (e.g., "Feb 2014").
  * Each column represents one month after cohort creation (month zero being the month of enrollment).
  * The value in each cell is usually the dropout or retention rate relative to the previous month.

Why are some cells in the cohort blank?

Because these cells refer to a point in the future. This type of chart is extremely useful for quickly identifying problem months, with respect to churn or retention.

The color shading (green = low churn, red = high churn) makes us immediately see problem areas. In this example, month two showed a peak in churn in previous cohorts, but appears to have improved from the August 2014 cohort.

Other ways to visualize cohort analysis

It is also possible to view a cohort analysis as a stacked line graph:

And finally, a line chart. This type of graph does a great job of demonstrating the non-linear characteristics of churn.

I hope this article on how to build a cohort analysis for a Saas has helped you. If you don't know how to implement it or want to automate it, you can use our subscription analysis and metrics tools.

[Build your free cohort analysis](/?page_id=12751)

## How to customize a cohort

You will always have to do some customization to make a cohort analysis a perfect fit for your business, there are several of issues and problems that I have seen, time and time again that I want to share so that you can avoid them.

How, for example, which users should I include in the base number of the cohort? There are two parts to the answer, as it depends on what you want to measure.

  1. If you want to find out your overall user retention and you have a free plan, then you should include all signups for a specific month.
  2. However, if you want to calculate LTV, you should only look at the number of paying customers. We should only count an account as paying when the user has paid. So if you offer a 30-day free trial, for example, wait to see if the user converts to a paid plan before including them in the cohort. This way, the numbers won't be skewed with users who never actually paid. If possible and without too much effort, you should also try to eliminate all "buddy plans" that you have given away to friends, your team or investors. If they don't pay, they are not representative of the real cohorts.

### How should I deal with customer churn during the first month?

There are different approaches to this, but in my opinion, taking into account the churn within the first month is the most accurate representation of reality. This means that in the first month the retention could be less than 100%, if people cancel their paid subscription within that month.

It would be something like this:

###  Cohort analysis with first month of churn

I do this because I don't want the analysis to overstate churn in the second month and understate it in the first month / base. After all, the reasons for churn in the first 1-4 weeks could be very different than in the 5-8 weeks.

### Should I treat company and individual accounts differently?

If you are at a very early stage or sell mostly (over 90%) individual plans, it is probably sufficient to mix them all in the same analysis. But when enterprise plans make up a significant portion of your paid accounts, or your product has a very different user experience when used by an entire team, you should probably analyze both types of accounts separately.

Results could include that team accounts are much more active, have less churn and see lower churn in the first month than individual plans. Or not. ...

### What about annual versus monthly plans in a cohort analysis?

The eternal question and the most repeated one. Again, if you focus on the activity of your users over their lifetime, it's fine to mix both plans. If what you want is to see how many of the users who signed up keep coming back after X months, there is no need to split them.

However, if you focus on churn, you should only look at paid accounts that could have churn, and that means you should exclude all annual plans that do not expire in the corresponding month. If they are included in the denominator, the churn figures would be affected.

### Conclusions for conducting a Saas Cohort

Now that I have done the customer cohort, what can I get out of it?

The two most obvious conclusions are shown in the following retention table

  * Scrolling horizontally you can see how the retention of a cohort decreases over the lifetime of the users.It is interesting to see where the biggest drops occur and whether the numbers stabilize after a few months.
  * Vertically, you can see (ideally) how the retention of your cohorts changes over the life of the product.

Assuming you don't just go to events ;), once the product is launched, you should see an improvement in user retention with younger cohorts as the product improves.

If not, you should consider whether the assumptions or characteristics you are working on are the right approach.

This data will be the basis for calculating your LTV.

  * Taking the weighted retention data for the sixth or, ideally, twelfth month and extrapolating it will give an approximation of the average customer lifetime.
  * If you multiply it by the average revenue per account (ARPA) or by the respective plan you are considering (e.g., individual/team), you will get your CLTV (Customer Life Time Value).

Customer Life Time Value is a key metric, the quintessence of cohort analysis, as it will give you a very rough idea of the profitability of your business model.

Subsequently, it will also tell you the highest price you can spend on customer acquisition to grow profitably. It is important to note here that, while super valuable, especially in the early stages of a startup, this number will always be an estimate and will most likely not be 100% accurate. Therefore, you should be continually monitoring and adjusting your CLTV calculations.

Finally keep in mind one last thing, if you count only paid subscriptions as defined in the first question above, then the prime rates for each month will also give you a more accurate number for the growth of the number of paying customers and subsequently the MRR growth.

I hope this post has been useful and if you have any questions or want to automate your cohorts only with your payment or billing information, you can contact me.
