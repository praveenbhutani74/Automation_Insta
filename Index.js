const puppeteer = require("puppeteer");
const id = "praveen6345";
const pw = "praveen@5574";
let Name = "willsmith";




let post;

async function Bot() {


    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        slowMo: 10
    });

    let pages = await browser.pages();
    let tab = pages[0];
    //for going to instagram
    await tab.goto("https://www.instagram.com/");
    await tab.waitForTimeout(1000);
    //For Login
    await tab.type('input[name=username]', id);
    await tab.type('input[name="password"]', pw);
    await tab.click('button[type="submit"]');

    //For clicking Save Info
    await tab.waitForSelector('.JErX0 button[type="button"]', { visible: true });
    await tab.waitForTimeout(1000);
    await tab.click('.JErX0 button[type="button"]');

    // Click on Turn On and then Type name for search
    await tab.waitForSelector('.mt3GC .aOOlW.bIiDR  ', { visible: true });
    // await tab.waitForTimeout(1000);
    await tab.click('.mt3GC .aOOlW.bIiDR  ');
    await tab.type('.LWmhU._0aCwM input[type="text"]', Name);

    await tab.goto("https://www.instagram.com/willsmith/");
    await tab.waitForTimeout(100);

    // Here search all posts
    let posts = await tab.$$('article >div:nth-child(1) img[decoding="auto"]');

    for (let i = 0; i < posts.length; i++) {
        post = posts[i];

        await post.click();

        
        //For like image 
        let like = await tab.$('.fr66n [aria-label="Like"]');
        
        if (like) {
            await tab.waitForSelector('.fr66n [aria-label="Like"] ');

            await tab.click('.fr66n [aria-label="Like"] ');
        }

        //For comment on Post
        await tab.waitForSelector('._15y0l .QBdPU ');
        await tab.waitForTimeout(1000);
        await tab.click('._15y0l .QBdPU ');

        await tab.waitForTimeout(1000);
        await tab.type('.Ypffh', "#IndiaFightsBack");
        await tab.waitForSelector('.RxpZH button[type="submit"]');
        await tab.waitForTimeout(1000);
        await tab.click('.RxpZH button[type="submit"]');


        //Like on Comment
        await tab.waitForSelector('.jdtwu [aria-label="Like"]');
        await tab.waitForTimeout(1000);
        await tab.click('.jdtwu [aria-label="Like"]');
        // await tab.waitForTimeout(2000);

        // Click on Menu
        await tab.waitForSelector('.MEAGs');
        await tab.waitForTimeout(1000);
        await tab.click('.MEAGs');

        //Copy Link
        await tab.waitForTimeout(500);
        await tab.waitForSelector('.mt3GC ');
        await tab.click('.mt3GC ');


        await Whatsapp(browser);

        // for Next Image
        await tab.waitForSelector('._65Bje.coreSpriteRightPaginationArrow');
        await tab.waitForTimeout(1000);
        await tab.click('._65Bje.coreSpriteRightPaginationArrow');
    }
}

async function Whatsapp(browser) {


    let newTab = await browser.newPage();

    await newTab.goto("https://web.whatsapp.com/");


    //For click on whatapp
    // await newTab.waitForSelector('.TbtXF span[title="mumma"]');
    let ans = await newTab.$('.TbtXF span[title="mumma"]');
    ans.click();

    await newTab.waitForSelector('#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text');


    await newTab.click('#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text');

// for paste 
    await newTab.keyboard.down("Control");
    await newTab.keyboard.press("V");
    await newTab.waitForTimeout(2000);
    await newTab.keyboard.press("Enter");
    await newTab.keyboard.up("Control");
    await newTab.waitForTimeout(2000);
    await newTab.waitForSelector('#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3)');
    await newTab.click('#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3)');
    await newTab.waitForTimeout(2000);
    await newTab.close();

}

Bot();