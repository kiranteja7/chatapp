
// import { saveMessage , fetchMessages} from "./messages.repository.js";



// export const storeMessage = async (req, res) => {
//     try {
//       const message = await saveMessage(req.body);
//       res.status(201).json(message);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };
  
//  export  const getMessages = async (req, res) => {
//     try {
//       const messages = await fetchMessages();
//       res.status(200).json(messages);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };