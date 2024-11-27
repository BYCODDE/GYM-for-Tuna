// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { apiAddCertification } from "../services/apiAddCertification";

// function useAddCertification() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: apiAddCertification,
//     onSuccess: (response) => {
//       const { data, error } = response;
//       if (!error) {
//         console.log("Certification added successfully:", data);
//         // Invalidate the query to refetch the updated certification list
//         queryClient.invalidateQueries(["certification"]);
//       } else {
//         console.error("Error adding certification:", error);
//       }
//     },
//     onError: (error) => {
//       console.error(`Error adding certification: ${JSON.stringify(error)}`);
//     },
//   });
// }

// export default useAddCertification;
