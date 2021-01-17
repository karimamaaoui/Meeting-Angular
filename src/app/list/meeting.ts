export class meeting {
    idMeet:number;
    titre:string;
    lieu:string;
    dateDeb:Date;
    dateFin:Date;



    constructor (idm:number,t:string,l:string,dd:Date,df:Date)
    {
        this.idMeet=idm;
        this.titre=t;
        this.lieu=l;
        this.dateDeb=dd;
        this.dateFin=df;
    }
    

}