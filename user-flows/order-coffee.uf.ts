import {UserFlowContext, UserFlowInteractionsFn, UserFlowProvider} from '@push-based/user-flow';

const interactions: UserFlowInteractionsFn = async (ctx: UserFlowContext): Promise<any> => {
    const {page, flow, browser, collectOptions} = ctx;
    const {url} = collectOptions;

    // Navigate to coffee order site
    await flow.navigate(url, {
        stepName: '🧭 Navigate to coffee cart'
    });

    await flow.startTimespan({stepName: '☕ Select coffee'});

    // Select coffee
    const cappuccinoItem = '.cup:nth-child(1)';
    await page.waitForSelector(cappuccinoItem);
    await page.click(cappuccinoItem);

    await flow.endTimespan();

    await flow.snapshot({stepName: '✔ Coffee selected'});


    await flow.startTimespan({stepName: '🛒 Checkout order'});

    // Checkout order
    const checkoutBtn = '[data-test=checkout]';
    await page.waitForSelector(checkoutBtn);
    await page.click(checkoutBtn);

    const nameInputSelector = '#name';
    await page.waitForSelector(nameInputSelector);
    await page.type(nameInputSelector, 'nina');

    const emailInputSelector = '#email';
    await page.waitForSelector(emailInputSelector);
    await page.type(emailInputSelector, 'nina@gmail.com');

    await flow.endTimespan();

    await flow.snapshot({stepName: '🧾 Order checked out'});

    await flow.startTimespan({stepName: '💌 Submit order'});

    // Submit order
    const submitBtn = '#submit-payment';
    await page.click(submitBtn);
    await page.waitForSelector(submitBtn);
    const successMsg = '.snackbar.success';
    await page.waitForSelector(successMsg);

    await flow.endTimespan();

    await flow.snapshot({stepName: '📧 Order submitted'});

    // Navigate to github info site
    await flow.navigate(url + 'github', {
        stepName: '🧭 Navigate to github'
    });
};

const userFlowProvider: UserFlowProvider = {
    interactions,
    flowOptions: {
        name: '☕ Order Coffee ☕',
        config: {
            "settings": {
                "budgets": [
                    {
                        "resourceCounts": [
                            {
                                "resourceType": "document",
                                "budget": 1
                            },
                            {
                                "resourceType": "script",
                                "budget": 1
                            },
                            {
                                "resourceType": "stylesheet",
                                "budget": 1
                            },
                            {
                                "resourceType": "image",
                                "budget": 0
                            },
                            {
                                "resourceType": "media",
                                "budget": 0
                            },
                            {
                                "resourceType": "font",
                                "budget": 0
                            },
                            {
                                "resourceType": "other",
                                "budget": 0
                            },
                            {
                                "resourceType": "third-party",
                                "budget": 0
                            }
                        ],
                        "resourceSizes": [
                            {
                                "resourceType": "script",
                                "budget": 0
                            },
                            {
                                "resourceType": "stylesheet",
                                "budget": 0
                            }
                        ],
                        "timings": [
                            {
                                "metric": "first-contentful-paint",
                                "budget": 10
                            },
                            {
                                "metric": "speed-index",
                                "budget": 10
                            },
                            {
                                "metric": "largest-contentful-paint",
                                "budget": 10
                            },
                            {
                                "metric": "cumulative-layout-shift",
                                "budget": 0
                            },
                            {
                                "metric": "total-blocking-time",
                                "budget": 10
                            }
                        ]
                    }
                ]
            }
        }
    }
};

module.exports = userFlowProvider;
