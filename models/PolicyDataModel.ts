export class PolicyDataModel {
    _id: string = '';
    offeringNumber: string = '';
    age: number = 0;
    avarageMonth: number = 0;
    LE: number = 0;
    multiplier: number = 0;
    paymentTable: AnnualData[] = [];
    NAV_per_unit: number = 0;
    DB_per_unit: number = 0;
    
    DB: number = 0;
    NAV: number = 0;
    units: number = 0;
    selected: boolean = false;
    IRR: number = 0;
    runTimeCalcData: any = {};
}
export class AnnualData {
    investment_amount: number;
    probability_for_maturity: number;
    age: number;
    time: number;
    nav: number;
    db: number;
    year: number;
    from: string;
    through: string;
    accumulated_investment: string;
    density: number;
    payout: any;
    irr: number;
}

export class QuarterlyData {
}

export class StaticData {
    age: number;
    dateOfBirth: number;
    name: string;
    offeringNumber: string;
    policyNumber: string;
    faceValue: number[]; // annual || quarterly 
    gender: 'male' | 'female';
    smoker: boolean;
    DB: number;
    IRR: number;
    multiplier: number = NaN;
    livesArray: number[];
    averageMonth: number;
    premiums: number[]; // annual || quarterly
    policyExpirationTime: number;
}


export class dataCalculated extends StaticData {
    leResults: LifeExpectancyResult;
}

export interface CalculationOptions {
    forceCalculateMultiplier?: boolean;
    forceCalculateMonthlyDist?: boolean;
    irr?: number;
    ongoing?: number;
    onboarding?: number;
    maturityFee?: number;
}

export class LifeExpectancyResult  {
    multiplier: number;
    averageMonth: number;
    livesArray: number[];

    livesArrayAdjustmentYear: number[];
    age: number;
    distanceAge: number;
}

export class MonthlyDistrabution {
}

export class MonthlyData {
    faceValue: number;
}
export class GenericData {

    maturityFee: number = 0;
    irr: number = 0.13;
    ongoing: number = 0;
    onboarding: number = 0;

}

export class BaseDataCaculation {
    
}

export interface CalculationLog {
    firstLivesArray?: number[];
    age?: number;
    livesArrayAdjustmentYear?: number[];
    livesArrayAdjustmentYearX?: number[];
    livesArrayAdjustmentYearY?: number[];
    livesArrayAdjustmentYearObject?: {counter: number, i: number}[];
    livesArrayWithMultiplier?: number[];
    livesArrayWithMultiplierX?: number[];
    livesArrayWithMultiplierY?: number[];
    deadsPerYearX?: number[];
    deadsPerYearY?: number[];

    deadsPerYearSumCubicplne?: number;
    deadsPerYearNormalCubicplne?: number;
    deadsPerYearNormalObject?: {counter: number, i: number}[];
    deadsPerYearObject?: {counter: number, i: number}[];
    deadPerMonthCubicSpline?: number[];
    surPerMonthCubicSpline?: number[];



    multiplier?: number;
    avarageMonth?: number;
    arrayOfMultiplierTry?: { multiplier: number, avarageMonth: number}[];

    monthlyDistrabution?: number[][]
}

// function exportSchema() {
//     var vw = new PolicyDataModel();
//     let v: any = {};
//     for (const key in vw) {
//         if (Object.prototype.hasOwnProperty.call(vw, key)) {
//             const element = vw[key];
//             v[key] = {
//                 type: typeof
//             }
//         }
//     }
// }