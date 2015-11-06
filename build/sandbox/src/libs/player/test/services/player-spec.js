describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('http://78.74.14.2/zowcast/build/sandbox/#/episodes');

        //var setSrc = function(src){
        //    return browser.executeScript(function(){
        //        var audio = document.getElementsByTagName('audio')[0];
        //        console.log(audio);
        //        audio.src = src;
        //       return audio;
        //    });
        //};

        //element(by.name(audio)).sendKeys('write first protractor test');
        //element(by.css('[value="add"]')).click();
        //
        //expect(todoList.count()).toEqual(3);
        //var xxo = document.getElementsByTagName('audio')[0];
        //expect(xxo).toEqual('write first protractor test');
        //
        //// You wrote your first test, cross it off the list
        //todoList.get(2).element(by.css('input')).click();
        //var completedAmount = element.all(by.css('.done-true'));
        var url = 'http://localhost/zowcast/audioSample.mp3';
        //console.log(setSrc(url))
        var el = element(by.id('audioPlayer'));
        expect(el.getAttribute('ng-src')).toEqual(url);
        //console.log('ok')
    });
});

