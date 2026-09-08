export enum PartnerVerificationStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
  SUSPENDED = 'SUSPENDED'
}

export interface PartnerDocumentRecord {
  id: string;
  licenseNumber: string;
  tin: string;
  issuedAt: string;
  verifiedAt?: string;
}
