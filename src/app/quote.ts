export class Quote {
    public showDescription: boolean;
    constructor(public id: number, public description: string, public name: string,public publisher: string, public completeDate: Date) {
      this.showDescription = false
  
    }
  }