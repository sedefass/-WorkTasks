function measure(action) {
    const START = new Date().getTime();

    action();

    const END = new Date().getTime();

    return (END - START);
}