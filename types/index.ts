//type definitions

export type FireSize = 'campfire' | 'bonfire' | 'inferno';

export type SessionType = 'focus' | 'break' | 'emergency_exit';

export type SyncStatus = 'offline' | 'online' | 'syncing';

//tracks user progress
export interface UserStreak {
    currentStreak: number;
    longestStreak: number;
    totalFocusTime: number;
    exitBarcodeData: string | null;
}

//single focus session
export interface FocusSession {
    id: string;
    userId: string;
    sessionType: SessionType;
    plannedDuration: number;
    actualDuration: number;
    completed: boolean;
    emergencyExit: boolean;
    timestampData: Date;
}

//remembers to sync later for offline mode
export interface PendingSyncAction {
    id: string;
    type: 'streak_update' | 'session_complete' | 'emergency_exit'
    date: any;
    localTimeStamp: Date;
    resolved: boolean;
}

//overall health report
export interface AppState {
    id: string;
    userStreak: UserStreak | null;
    syncStatus: boolean;
    isAuthenticated: boolean;
    currentSession: FocusSession | null;
}