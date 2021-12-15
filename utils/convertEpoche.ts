/*
*   THIS FUNCTION AIMS TO CONVERT UNIX TIME TO READABLE DATE
*   EX : 1639525085
*   OUTPUT: 23:38:05
*/

export default (unix_timestamp: any) => {

    const readableDate = new Date(unix_timestamp * 1000);

    return `${readableDate.toTimeString()}`

}