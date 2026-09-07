export enum CancellationPolicyTier {
  FLEXIBLE = 'FLEXIBLE',
  MODERATE = 'MODERATE',
  STRICT = 'STRICT',
  NON_REFUNDABLE = 'NON_REFUNDABLE'
}

export interface BookingCancellationRule {
  tier: CancellationPolicyTier;
  refundableHoursBeforeCheckIn: number;
  penaltyPercentage: number;
}
