export const errorHandler = (error: any, req: any, res: any, next: any) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log("from middleware",res.statusCode);
    if (statusCode != 200) {
        console.log(error.message);
        res.status(statusCode).json({ message: res.message });
    } else {
        res.status(200).json({ message: "success code with 200" });
    }
};
