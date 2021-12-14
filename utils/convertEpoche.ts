export default (unix_timestamp: any) => {

    const newDate = new Date(unix_timestamp * 1000);

    const hours = newDate.getHours();
    const minutes = `0${newDate.getMinutes()}`
    const seconds = `0${newDate.getMinutes()}`

    return `${hours}:${minutes.substring(-2)}:${seconds.substring(-2)}`

}