export type TaskProps = {
    id: number;
    title: string;
    subtitle?: string;
    status: boolean;
    onCheck?: () => void;
    onRemove?: () => void;
    
};

export type RootStackParamList = {
    Home: undefined;
    Details: TaskProps;
};

