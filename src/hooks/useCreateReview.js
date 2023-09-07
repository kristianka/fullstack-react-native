import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/queries';

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW, {
        onError: (error) => {
            console.log(error);
        },
    });

    const postReview = async (obj) => {
        const review = {
            ownerName: obj.username,
            repositoryName: obj.name,
            rating: Number(obj.rating),
            text: obj.review,
        }
        console.log("review", review)
        const { data } = await mutate({ variables: { review } });
        console.log("postreview data", data)
        return data;
    };

    return [postReview, result];
};

export default useCreateReview;