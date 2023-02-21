var mongoose = require('mongoose'),
            Schema = mongoose.Schema;
        var PolicyParameter = new Schema({
  mdProps: {},
  policyNumber: {
    required: true,
    unique: true,
    type: String
  },
  dob: {
    type: Date
  },
  age: {
    type: Number
  },
  policyExpiredAge: {
    type: Number
  },
  firstFaceValue: {
    type: Number
  },
  issueDate: {},
  nearOrPrevius: {
    type: String
  },
  policyAge: {
    type: Number
  },
  gender: {
    type: String
  },
  smoker: {
    type: Boolean
  },
  insuranceCarrier: {},
  insuranceCarrierRating: {},
  ownerCount: {
    type: Number
  },
  faceValueType: {
    type: String
  },
  faceValue: {
    type: [Number]
  },
  constFaceValue: {
    type: Number
  },
  faceValueSrc: {
    type: String
  },
  leSrc: {
    type: String
  },
  medMonth: {
    type: Number
  },
  multiplier: {
    type: Number
  },
  livesArray: {
    type: [Number]
  },
  priceOrIrr: {
    type: String
  },
  price: {
    type: Number
  },
  IRR: {
    type: Number
  },
  monthlyPremiums: {
    type: [Number],
    required: true
  },
  ongoing: {
    type: Number
  },
  onboarding: {
    type: Number
  },
  leCalcOptions: {
    type: Number
  }
})

        const model = mongoose.model('PolicyParameter', PolicyParameter);

        module.exports = model;
        /* {"mdMap":{"policyNumber":{"key":"policyNumber"},"dob":{"key":"dob","md":{"type":"date"}},"age":{"key":"age","md":{"type":"num","readonly":true,"validate":[">0","<120"]}},"_id":{"key":"_id"},"policyExpiredAge":{"key":"policyExpiredAge"},"firstFaceValue":{"key":"firstFaceValue","md":{"displayName":"Face Value","type":"num","numType":"currency"}},"issueDate":{"key":"issueDate","md":{"type":"date"}},"nearOrPrevius":{"key":"nearOrPrevius","md":{"displayName":"Near","options":["Near","Previous"]}},"policyAge":{"key":"policyAge"},"gender":{"key":"gender","md":{"options":["Male","Female"]}},"smoker":{"key":"smoker","md":{"options":["true","false"]}},"insuranceCarrier":{"key":"insuranceCarrier","md":{"options":[]}},"insuranceCarrierRating":{"key":"insuranceCarrierRating","md":{"options":["A","B","C"]}},"ownerCount":{"key":"ownerCount","md":{"validate":[">=1","<=5"]}},"faceValueType":{"key":"faceValueType","md":{"options":["External (Quarterly)","Consistently"]}},"faceValue":{"key":"faceValue","md":{"hidden":true}},"constFaceValue":{"key":"constFaceValue","md":{"hiddenIf":"this.faceValueType !== 'Fixed'","requireIf":["this.faceValueType === 'Fixed'"]}},"faceValueSrc":{"key":"faceValueSrc","md":{"hidden":true}},"leSrc":{"key":"leSrc","md":{"options":["VBT","VBT + Month","VBT + multiplier","Curve"],"displayName":"LE src method"}},"medMonth":{"key":"medMonth","md":{"hidden":true,"displayName":"Month"}},"multiplier":{"key":"multiplier","md":{"type":"number"}},"livesArray":{"key":"livesArray","md":{"hidden":true}},"priceOrIrr":{"key":"priceOrIrr","md":{"options":["Price","IRR"],"displayName":"Price or IRR"}},"price":{"key":"price","md":{"type":"num","hiddenIf":"this.priceOrIrr !== 'Price'","requireIf":["this.priceOrIrr === 'Price'"],"numType":"currency"}},"IRR":{"key":"IRR","md":{"hiddenIf":"this.priceOrIrr !== 'IRR'","type":"num","validate":[">1","<100"],"requireIf":["this.priceOrIrr === 'IRR'"],"numType":"percentage"}},"monthlyPremiums":{"key":"monthlyPremiums","md":{"hidden":true,"optional":true}},"ongoing":{"key":"ongoing","md":{"hidden":true,"optional":true}},"onboarding":{"key":"onboarding","md":{"hidden":true,"optional":true}},"leCalcOptions":{"key":"leCalcOptions","md":{}}},"mdProps":{"policyNumber":{"required":true,"unique":true,"type":"String"},"monthlyPremiums":{"type":"[Number]","required":true}},"policyNumber":"","dob":"1949-12-31T22:00:00.000Z","age":0,"_id":"","policyExpiredAge":100,"firstFaceValue":0,"issueDate":null,"nearOrPrevius":"Near","policyAge":0,"gender":"Male","smoker":false,"insuranceCarrier":null,"insuranceCarrierRating":null,"ownerCount":1,"faceValueType":"External (Quarterly)","faceValue":[],"constFaceValue":0,"faceValueSrc":"Manual","leSrc":"","medMonth":0,"multiplier":0,"livesArray":[],"priceOrIrr":"IRR","price":0,"IRR":0,"monthlyPremiums":null,"ongoing":0,"onboarding":0,"leCalcOptions":0,"mdArray":[{"key":"policyNumber"},{"key":"dob","md":{"type":"date"}},{"key":"age","md":{"type":"num","readonly":true,"validate":[">0","<120"]}},{"key":"_id"},{"key":"policyExpiredAge"},{"key":"firstFaceValue","md":{"displayName":"Face Value","type":"num","numType":"currency"}},{"key":"issueDate","md":{"type":"date"}},{"key":"nearOrPrevius","md":{"displayName":"Near","options":["Near","Previous"]}},{"key":"policyAge"},{"key":"gender","md":{"options":["Male","Female"]}},{"key":"smoker","md":{"options":["true","false"]}},{"key":"insuranceCarrier","md":{"options":[]}},{"key":"insuranceCarrierRating","md":{"options":["A","B","C"]}},{"key":"ownerCount","md":{"validate":[">=1","<=5"]}},{"key":"faceValueType","md":{"options":["External (Quarterly)","Consistently"]}},{"key":"faceValue","md":{"hidden":true}},{"key":"constFaceValue","md":{"hiddenIf":"this.faceValueType !== 'Fixed'","requireIf":["this.faceValueType === 'Fixed'"]}},{"key":"faceValueSrc","md":{"hidden":true}},{"key":"leSrc","md":{"options":["VBT","VBT + Month","VBT + multiplier","Curve"],"displayName":"LE src method"}},{"key":"medMonth","md":{"hidden":true,"displayName":"Month"}},{"key":"multiplier","md":{"type":"number"}},{"key":"livesArray","md":{"hidden":true}},{"key":"priceOrIrr","md":{"options":["Price","IRR"],"displayName":"Price or IRR"}},{"key":"price","md":{"type":"num","hiddenIf":"this.priceOrIrr !== 'Price'","requireIf":["this.priceOrIrr === 'Price'"],"numType":"currency"}},{"key":"IRR","md":{"hiddenIf":"this.priceOrIrr !== 'IRR'","type":"num","validate":[">1","<100"],"requireIf":["this.priceOrIrr === 'IRR'"],"numType":"percentage"}},{"key":"monthlyPremiums","md":{"hidden":true,"optional":true}},{"key":"ongoing","md":{"hidden":true,"optional":true}},{"key":"onboarding","md":{"hidden":true,"optional":true}},{"key":"leCalcOptions","md":{}}]} */
        