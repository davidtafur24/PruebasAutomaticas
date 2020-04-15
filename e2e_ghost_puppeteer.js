const puppeteer = require('puppeteer');

async function test(){
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    
    const page = await browser.newPage();

    //---------------Login---------------//
    await page.goto('http://localhost:2368/ghost/', { waitUntil: "networkidle0" });
    await page.waitFor(2000);
    await page.type('input[id="ember8"]',"myemail@example.com");
    await page.type('input[id="ember10"]',"ak4jSas2dW");
    await page.click('button[id="ember12"]');
    await page.waitFor(5000);

    //---------------Manage----------------//
        //Posts
            //Drafts
            await page.click('a[title="Drafts"]');
            await page.waitFor(2000);
            //Schedules
            await page.click('a[title="Scheduled"]');
            await page.waitFor(2000);
            //Published
            await page.click('a[title="Published"]');
            await page.waitFor(2000);

        //Pages
        await page.click('a[href="#/pages/"]');
        await page.waitFor(2000);

        //Tags
        await page.click('a[href="#/tags/"]');
        await page.waitFor(2000);

        //Staff
        await page.click('a[href="#/staff/"]');
        await page.waitFor(2000);

    //---------------Settings----------------//
        //General
        await page.click('a[href="#/settings/general/"]');
        await page.waitFor(2000);

        //Desing
        await page.click('a[href="#/settings/design/"]');
        await page.waitFor(2000);
        
        //Code injection
        await page.click('a[href="#/settings/code-injection/"]');
        await page.waitFor(2000);
        
        //Integrations
        await page.click('a[href="#/settings/integrations/"]');
        await page.waitFor(2000);
        
        //Labs
        await page.click('a[href="#/settings/labs/"]');
        await page.waitFor(2000);

    //---------------Settings----------------//
        //My profile
        await page.click('div[role="button"]');
        await page.waitFor(1000);
        await page.click('a[href="#/staff/my/"]');
        await page.waitFor(1000);
            
        //Sign out
        await page.click('div[role="button"]');
        await page.waitFor(1000);
        await page.click('a[href="#/signout/"]');
        await page.waitFor(5000);
    

await browser.close();
}

test();