module.exports = {
    //Test case of valid login
    'Valid login' : function(browser) {
        //Visit url from launch_url on nightwatch.json
        browser.url(browser.launch_url)
        //Wait for 1000 ms until "div._kbq82" element is visible
        .waitForElementVisible('div._kbq82', 1000)
        //Checks "main" element contains "Sign up" text
        .assert.containsText('main', 'Sign up');

        //This is chai expect assertion library
        //Checks "href" attribute of an "p._g9ean>a" element exists and it has "/accounts/login/" value.
        browser.expect.element('p._g9ean>a')
        .to.have.attribute('href')
        .which.contains("/accounts/login/");

        //Click "p._g9ean>a" element, then wait for 10000 ms until "div._kbq82" element is visible
        browser.click('p._g9ean>a')
        .waitForElementVisible('div._kbq82', 10000)
        //Input or set value your username
        .setValue('form._3jvtb>div._t296e:nth-child(1)>div._sjplo>div._ev9xl>input._ph6vk._jdqpn._o716c',
            'YOUR_USERNAME')
        //Input or set value your password
        .setValue('form._3jvtb>div._t296e:nth-child(2)>div._sjplo>div._ev9xl>input._ph6vk._jdqpn._o716c',
            'YOUR_PASSWORD');

        //This is chai expect assertion library
        //Checks "p._g9ean>a" element is enabled.
        browser.expect.element('p._g9ean>a').to.be.enabled;
        
        //Click "._qv64e._gexxb._4tgw8._njrw0" button element, then wait for 10000 ms until "div._dzwdj._rga4h" is visible
        browser.click('button._qv64e._gexxb._4tgw8._njrw0')
        .waitForElementVisible('div._dzwdj._rga4h', 10000)
        //End and removing session
        .end();
    }
};