
export interface IservicesData {
    id: number,
    title: string,
    description: string,
    price: number
};

export interface Ilink {
    href: string,
    label: string
};

export interface IreviewData {
    id: number,
    email: string,
    review: string,
    sendTime: string
};


export interface IreviewDataProps {
    reviewData: IreviewData[],
    setReviewData: (arg:any) => void
};

export interface Ierror {
    email: string,
    review: string
};
