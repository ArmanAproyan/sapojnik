
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
    review: string
};


export interface IreviewDataProps {
    reviewData: IreviewData[],
    setReviewData: (arg:any) => void
}

