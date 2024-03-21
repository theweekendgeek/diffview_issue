export default class Example {
    /*
    *
    *
    *
    *
    * just to increase file length
    *
    *
    *
    *
    * */

    static async exampleMethod() {
        const someArray = []
        let condition1;
        let condition2;
        let condition3;
        let condition4;
        let condition5;

        if (condition1 || condition2) {
            // comment 0
            someArray.push('some logic 1');
        } else {

            if (condition3) {
                if (condition4) {
                    // comment 1
                    someArray.push('some logic 2');
                } else {
                    // comment 2
                    someArray.push(
                        'some logic 3'
                    );
                }
            } else {

                if (!condition5) {
                    // comment 3
                    someArray.push('some logic 4');
                }

                // comment 4
                someArray.push('some logic 5');
            }

            let condition6;
            if (condition6) {
                // comment 5
                someArray.push('some logic 6');
            }
        }

        return someArray
    }

    /*
*
*
*
*
* just to increase file length
*
*
*
*
* */

}

