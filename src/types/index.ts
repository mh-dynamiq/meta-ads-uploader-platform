// src/types/index.ts

// User type
export interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
  }
  
  // Meta Account type
  export interface MetaAccount {
    id: string;
    name: string;
    accessToken: string;
    businessId?: string;
    isConnected: boolean;
  }
  
  // Campaign type
  export interface Campaign {
    id: string;
    name: string;
    status: 'ACTIVE' | 'PAUSED' | 'DELETED' | 'ARCHIVED';
    objective: string;
    spendCap?: number;
    dailyBudget?: number;
    startTime: string;
    endTime?: string;
  }
  
  // Ad Set type
  export interface AdSet {
    id: string;
    name: string;
    campaignId: string;
    status: 'ACTIVE' | 'PAUSED' | 'DELETED' | 'ARCHIVED';
    dailyBudget?: number;
    targetingSpec?: Record<string, any>;
    optimization_goal: string;
    bid_amount?: number;
  }
  
  // Creative Asset type
  export interface CreativeAsset {
    id: string;
    name: string;
    type: 'IMAGE' | 'VIDEO' | 'CAROUSEL';
    url: string;
    thumbnailUrl?: string;
    width?: number;
    height?: number;
    duration?: number;
    sourceType: 'UPLOAD' | 'GOOGLE_DRIVE' | 'DROPBOX';
  }
  
  // Ad type
  export interface Ad {
    id: string;
    name: string;
    adsetId: string;
    status: 'ACTIVE' | 'PAUSED' | 'DELETED' | 'ARCHIVED';
    creativeId?: string;
    headline?: string;
    description?: string;
    caption?: string;
    callToAction?: string;
    url?: string;
    thumbnailUrl?: string;
  }
  
  // Upload Batch type
  export interface UploadBatch {
    id: string;
    userId: string;
    status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
    totalItems: number;
    processedItems: number;
    failedItems: number;
    createdAt: string;
    completedAt?: string;
  }
  
  // Navigation Item type
  export interface NavItem {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    submenu?: boolean;
    subMenuItems?: NavItem[];
  }