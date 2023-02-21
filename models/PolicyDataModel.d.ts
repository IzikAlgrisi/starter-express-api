export declare class PolicyDataModel {
    _id: string;
    offeringNumber: string;
    age: number;
    avarageMonth: number;
    LE: number;
    multiplier: number;
    paymentTable: AnnualData[];
    NAV_per_unit: number;
    DB_per_unit: number;
    DB: number;
    NAV: number;
    units: number;
    selected: boolean;
    IRR: number;
    runTimeCalcData: any;
}
export declare class AnnualData {
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
export declare class QuarterlyData {
}
export declare class StaticData {
    age: number;
    dateOfBirth: number;
    name: string;
    offeringNumber: string;
    policyNumber: string;
    faceValue: number[];
    gender: 'male' | 'female';
    smoker: boolean;
    DB: number;
    IRR: number;
    multiplier: number;
    livesArray: number[];
    averageMonth: number;
    premiums: number[];
    policyExpirationTime: number;
}
export declare class dataCalculated extends StaticData {
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
export declare class LifeExpectancyResult {
    multiplier: number;
    averageMonth: number;
    livesArray: number[];
    livesArrayAdjustmentYear: number[];
    age: number;
    distanceAge: number;
}
export declare class MonthlyDistrabution {
}
export declare class MonthlyData {
    faceValue: number;
}
export declare class GenericData {
    maturityFee: number;
    irr: number;
    ongoing: number;
    onboarding: number;
}
export declare class BaseDataCaculation {
}
export interface CalculationLog {
    firstLivesArray?: number[];
    age?: number;
    livesArrayAdjustmentYear?: number[];
    livesArrayAdjustmentYearX?: number[];
    livesArrayAdjustmentYearY?: number[];
    livesArrayAdjustmentYearObject?: {
        counter: number;
        i: number;
    }[];
    livesArrayWithMultiplier?: number[];
    livesArrayWithMultiplierX?: number[];
    livesArrayWithMultiplierY?: number[];
    deadsPerYearX?: number[];
    deadsPerYearY?: number[];
    deadsPerYearSumCubicplne?: number;
    deadsPerYearNormalCubicplne?: number;
    deadsPerYearNormalObject?: {
        counter: number;
        i: number;
    }[];
    deadsPerYearObject?: {
        counter: number;
        i: number;
    }[];
    deadPerMonthCubicSpline?: number[];
    surPerMonthCubicSpline?: number[];
    multiplier?: number;
    avarageMonth?: number;
    arrayOfMultiplierTry?: {
        multiplier: number;
        avarageMonth: number;
    }[];
    monthlyDistrabution?: number[][];
}
