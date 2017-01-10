//its not implemented for nested tags!
function solve(args) {
    String.prototype.changeOrgCase = function () {
        var result;
        result = this.replace(/<orgcase>/g, '').replace(/<\/orgcase>/g, '');

        return result;
    };

    String.prototype.changeLowerCase = function () {
        var result = this;

        var startIndex = result.indexOf('<lowcase>') + '<lowcase>'.length;
        var endIndex = result.indexOf('<\/lowcase>');

        while (startIndex >= 0) {
            var temp = result.substring(startIndex, endIndex);
            var replace = temp.toLowerCase();

            result = result.replace('<lowcase>' + temp + '<\/lowcase>', replace);

            startIndex = result.indexOf('<lowcase>', endIndex - '<lowcase>'.length); //endIndex - '<lowcase>'.length === startIndex - '<lowcase>'.length + temp.length
            if (startIndex !== -1) {
                startIndex += '<lowcase>'.length;
            }
            endIndex = result.indexOf('<\/lowcase>', endIndex - '<lowcase>'.length);
        }

        return result;
    };

    String.prototype.changeUpperCase = function () {
        var result = this;

        var startIndex = result.indexOf('<upcase>') + '<upcase>'.length;
        var endIndex = result.indexOf('<\/upcase>');

        while (startIndex >= 0) {
            var temp = result.substring(startIndex, endIndex);
            var replace = temp.toUpperCase();

            result = result.replace('<upcase>' + temp + '<\/upcase>', replace);          

            startIndex = result.indexOf('<upcase>', endIndex - '<upcase>'.length); //endIndex - '<upcase>'.length === startIndex - '<upcase>'.length + temp.length
            if (startIndex !== -1) {
                startIndex += '<upcase>'.length;
            }
            endIndex = result.indexOf('<\/upcase>', endIndex - '<upcase>'.length);
        }

        return result;
    };

    var text = args[0];
    console.log(text.changeUpperCase().changeLowerCase().changeOrgCase());
}

var test = ['<upcase>We are</upcase> <upcase>liViNg</upcase> liViNg in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>Anything</lowcase> <upcase>else.</upcase>'];

solve(test);


//--------------------------------------------------------------------------------------------------------------
//-----FIRST JS FILE-----

/**
 * Parser that uppercase, lowercase and mix case text based on tags
 * @type {{parse}} - the initialization function
 */
const Parser = (function Parser() {
    /**
     * Parse the text in a <upcase> tag to uppercase letters
     * @param string {string}
     * @returns {string}
     */
    const upcase = (string) => {
        return string.replace(/<upcase>(.*?)<\/upcase>/g, (a, b) => b.toUpperCase());
    };

    /**
     * Parse the text in a <lowcase> tag to lowercase letters
     * @param string {string}
     * @returns {string}
     */
    const lowcase = (string) => {
        return string.replace(/<lowcase>(.*?)<\/lowcase>/g, (a, b) => b.toLowerCase());
    };

    /**
     * Parse the text in a <mixcase> tag to lowercase and uppercase letters
     * @param string {string}
     * @returns {string}
     */

    const mixcase = (string) => {
        const random = (letter) => {
            return Math.floor(Math.random() + 0.5) < 1 ? letter.toUpperCase() : letter.toLowerCase();
        };

        return string.replace(/<mixcase>(.*?)<\/mixcase>/g, (a, b) => {
            return b.split('')
              .map((letter) => random(letter))
              .join('');
        });
    };

    const API = {
        lowcase,
        upcase,
        mixcase,
    };

    /**
     * Parse all lowcase, upcase and mixcase tags
     * @param string {string}
     * @returns {string}
     */
    const parse = (string) => {
        let parsedString = string;
        const parsers = [lowcase, upcase, mixcase];

        for (let i = 0; i < parsers.length; i++) {
            parsedString = parsers[i](parsedString);
        }

        return parsedString;
    };

    return {
        parse,
        API,
    };
}());

export default Parser;

//-----SECOND JS FILE-----
import { assert } from 'chai';
import Parser from '../parser';

describe('Tag parser', () => {
    describe('Parser function', () => {
        it('should exist', (done) => {
            assert.isDefined(Parser);
            done();
        });
    });

    describe('Lowcase parser', () => {
        const removeTags = '<lowcase>hello world</lowcase>';
        const lowerCaseText = '<lowcase>How Are YOU world.</lowcase>';

        it('should exist', (done) => {
            assert.isDefined(Parser.API.lowcase);
            done();
        });
        it('should remove the lowcase tags', (done) => {
            assert.equal(Parser.API.lowcase(removeTags), 'hello world');
            done();
        });
        it('should lower case the text', (done) => {
            assert.equal(Parser.API.lowcase(lowerCaseText), 'how are you world.');
            done();
        });
    });
    describe('Upcase parser', () => {
        const removeTags = '<upcase>hello world</upcase>';
        const upperCaseTest = '<upcase>how are you world.</upcase>';

        it('should exist', (done) => {
            assert.isDefined(Parser.API.upcase);
            done();
        });
        it('should remove the upcase tag', (done) => {
            assert.equal(Parser.API.upcase(removeTags), 'HELLO WORLD');
            done();
        });
        it('should upper case text text', (done) => {
            assert.equal(Parser.API.upcase(upperCaseTest), 'HOW ARE YOU WORLD.');
            done();
        });
    });
    describe('Mixcase parser', () => {
        it('should exist', (done) => {
            assert.isDefined(Parser.API.mixcase);
            done();
        });
        it('should remove the mixcase tags', (done) => {
            const mixed = Parser.API.mixcase('<mixcase>hello</mixcase>');
            assert.equal(mixed.length, 5);
            done();
        });
    });
});