declare global {
    namespace Express {
      interface Request {
        user: obj;
      }
    }
  }
  
  export {};