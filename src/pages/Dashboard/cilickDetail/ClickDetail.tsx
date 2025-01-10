import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";
import Navbar from "components/navbar/Navbar";
import reseption1 from "./img/reseption1.jpg";
import weting from "./img/weting center.jpg";
import weiting from "./img/weiting holl.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import "./ClickDetail.css";

import Villa4 from "./img/villa4.jpg";
import Villa3 from "./img/villa3.jpg";
import Villa2 from "./img/villa2.jpg";
import Villa1 from "./img/villa1.jpg";
import Villa5 from "./img/villa5.jpg";
import {
  AccessTime,
  AttachMoney,
  Fastfood,
  Hiking,
  Hotel,
  Public,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AddNewRooms from "components/AddNewRooms/AddNewRooms";

// Example room data
const images = [
  {
    id: 1,
    title: "Bir kishilik hona",
    description:
      "Bir kishilik xona – sizning qulayligingiz uchun ideal tanlov. Xonada barcha zaruriy qulayliklar mavjud: qulay karavot, zamonaviy mebellar, konditsioner va Wi-Fi ulanishi. Sizning dam olish va ish faoliyatingizni maksimal darajada qulay va xotirjam qilish uchun barcha sharoitlar yaratilgan.",
    facilities: "Tekin WiFi, Avto turargoh, Baseyn",
    price: "100$",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfLkwLrf4rpvCZHc5--29eqYv86fo9ggrgw&s",
  },
  {
    id: 2,
    title: "Ikki kishilik hona",
    description:
      "Ikki kishilik xona – ikki kishi uchun mukammal tanlov. Xonada ikkita karavot, zamonaviy mebellar, shinam va yorqin ichki dizayn mavjud. Konditsioner, Wi-Fi va boshqa barcha qulayliklar sizning dam olishingizni unutilmas va qulay qilish uchun taqdim etilgan.",
    facilities: "Tekin WiFi, Avto turargoh, Baseyn, Zal , Balkon",
    price: "170$",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1aZQ8nh9P9qGzauogHpTtZVNi1WIZ9BBnQ&s",
  },
  {
    id: 3,
    title: "oilaviy hona",
    description:
      "Juftliklar xonasi – ikki kishilik qulaylik va dam olish uchun mo‘ljallangan zamonaviy va shinam xona. Xonada keng juftlik karavoti, konditsioner, Wi-Fi, televizor va boshqa barcha zarur qulayliklar mavjud. Xonamizda yuqori darajadagi xizmat va xotirjam dam olishni ta'minlash uchun barcha sharoitlar yaratilga.",
    facilities: "Tekin WiFi, Avto turargoh, Baseyn, Zal, Fitness club,  Balkon",
    price: "220$",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCH8ufTsMaeP8CtE4UY1LeOrxdKTYBQl2RQ&s",
  },
];

const serviceData = [
  {
    id: 1,
    title: "Zomin bo'ylab",
    icon: <Public style={{ fontSize: "60px" }} />,
    description: "Zomin tog'larida unutilmas sayohatni boshdan kechiring..",
  },
  {
    id: 2,
    title: "sarguzashtlar",
    icon: <Hiking style={{ fontSize: "60px" }} />,
    description: "Hayajonli sarguzashtlarga otlaning.",
  },
  {
    id: 3,
    title: "Ovqatlar & Icimliklar",
    icon: <Fastfood style={{ fontSize: "60px" }} />,
    description: "Madaniy taomlarning noyob ta'mini kashf eting.",
  },
  {
    id: 4,
    title: "Arzon mehmonxonalar",
    icon: <Hotel style={{ fontSize: "60px" }} />,
    description: "Eng yaxshi narxda qulay turar joylar",
  },
  {
    id: 5,
    title: "Arzon narx",
    icon: <AttachMoney style={{ fontSize: "60px" }} />,
    description: "Sizning sayohatlaringiz uchun eng yaxshi takliflar..",
  },
  {
    id: 6,
    title: "24/7 Hizmatlar",
    icon: <AccessTime style={{ fontSize: "60px" }} />,
    description: "Biz har doim siz uchun shu yerdamiz.",
  },
];

const ClickDetail: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [liked, setLiked] = useState(false); // Like state
  const [likeCount, setLikeCount] = useState(0); // Like count
  const [bookingConfirmed, setBookingConfirmed] = useState(false); // Booking status
  const navigate = useNavigate();

  const textToShare = "Check out this amazing place on Everest Plaza!"; // Text for sharing

  const handleBookClick = (item: any) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const onClick = () => {
    navigate("/ConfirmPage");

    setBookingConfirmed(true);
    setOpenDialog(false);
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(textToShare)}`;
    window.open(telegramShareUrl, "_blank");
  };

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCommentDelete = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div style={{ backgroundColor: "#F0FBFF" }}>
      <Header />
      {/* <Navbar /> */}

      <div style={{ maxWidth: "1360px", margin: "auto", padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            alignItems: "center",
          }}
        >
          <Typography style={{ paddingLeft: "40px" }}>
            <h1 style={{ fontFamily: "Manrope", fontSize: "47px" }}>
              Everest Plaza
            </h1>
          </Typography>

          <div style={{ display: "flex", gap: "10px" }}>
            <AddNewRooms refetch={undefined} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconButton onClick={handleLike} color="primary">
                {liked ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <Typography variant="body1">{likeCount} </Typography>
            </div>

            <IconButton onClick={handleShare} color="primary">
              <ShareIcon />
            </IconButton>
          </div>
        </div>

        <div style={{ marginBottom: "1rem", display: "flex", gap: "20px" }}>
          <img
            className="hover-effect"
            style={{ borderRadius: "8px" }}
            width={800}
            height={673}
            src={reseption1}
          />
          <div>
            <img
              className="hover-effect"
              style={{ borderRadius: "8px", maxWidth: "1000px" }}
              src={weting}
            />
            <img
              className="hover-effect"
              style={{ borderRadius: "8px" }}
              src={weiting}
            />
          </div>
        </div>

        <Stack direction="row" spacing={4} marginBottom={4}>
          {images.slice(0, 3).map((item) => (
            <Card
              sx={{
                maxWidth: 430,
                backgroundColor: "#f5f5f5",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                },
              }}
              key={item.id}
            >
              <CardMedia
                component="img"
                height="300"
                image={item.imageUrl}
                alt={item.title}
                className="hover-effect"
                sx={{
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              />
              <CardContent>
                <Typography
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                  variant="h6"
                  component="div"
                  color="#000000"
                >
                  {item.title}
                </Typography>
                <Typography
                  style={{ color: "#6F6F6F" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.description}
                </Typography>
                <Typography
                  style={{ color: "#6F6F6F" }}
                  variant="body2"
                  color="text.secondary"
                  mt={2}
                >
                  <strong>Xususiyatlari:</strong> {item.facilities}
                </Typography>
                <Typography
                  style={{ color: "#6F6F6F" }}
                  variant="body2"
                  color="text.secondary"
                  mt={2}
                >
                  <strong>Narx:</strong> {item.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: 2,
                    backgroundColor: "#1BA98F",
                    "&:hover": {
                      backgroundColor: "#17A674",
                    },
                  }}
                  onClick={() => handleBookClick(item)}
                >
                  Hozir band qiling
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Band qilish "{selectedItem?.title}"</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Chindan ham buni bron qilishni xohlaysizmi? "{selectedItem?.title}
              "?
            </Typography>
            <Typography
              style={{ fontFamily: "Manrope" }}
              variant="body2"
              mt={2}
            >
              <strong>Izoh:</strong> {selectedItem?.description}
            </Typography>
            <Typography
              style={{ fontFamily: "Manrope" }}
              variant="body2"
              mt={2}
            >
              <strong>Xusisiyatlar:</strong> {selectedItem?.facilities}
            </Typography>
            <Typography
              style={{ fontFamily: "Manrope" }}
              variant="body2"
              mt={2}
            >
              <strong>Narx:</strong> {selectedItem?.price}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Bekor qilish
            </Button>
            <Button onClick={onClick} color="secondary">
              Buyurtmani tasdiqlash
            </Button>
          </DialogActions>
        </Dialog>

        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <div>
            <h1
              style={{
                textAlign: "center",
                paddingBottom: "1rem",
                fontFamily: "Manrope",
              }}
            >
              Biz Haqimizda
            </h1>
            <p
              style={{
                textAlign: "center",
                maxWidth: "1000px",
                fontFamily: "Manrope",
                fontSize: "18px",
              }}
            >
              Bizning mehmonxonamiz sizga eng yuqori darajadagi qulayliklarni va
              xizmatlarni taqdim etishga intiladi. Har bir xonamiz zamonaviy
              uslubda bezatilgan bo‘lib, mehmonlarimizning dam olish va ish
              jarayonida maksimal darajada qulaylik va farovonlikni ta'minlaydi.
              Mehmonxona ajoyib joylashuvi, do'stona xodimlari va yuqori sifatli
              xizmatlari bilan farq qiladi. Bizning maqsadimiz — sizning dam
              olishingizni unutilmas qilish, shuningdek, har bir mehmonni o‘zini
              xushnud va xotirjam his qilishi uchun barcha imkoniyatlarni
              yaratish.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <video
            className="hover-effect"
            style={{ borderRadius: "30px" }}
            width="80%"
            controls
          >
            <source
              src="https://cdn.pixabay.com/video/2015/10/16/1057-142621433_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <section id="services-section">
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              fontWeight: "bold",
              paddingTop: "60px",
              fontFamily: "Manrope",
              paddingBottom: "20px",
            }}
          >
            Cheksiz Hizmatlar
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {serviceData.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: "#fff",
                    textAlign: "center",
                    "&:hover": { transform: "scale(1.05)" },
                    transition: "transform 0.3s ease",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    onClick={() => navigate(`/card-info/${service.id}`)}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 2,
                      }}
                    >
                      <Box sx={{ fontSize: "48px", mb: 1, color: "#1BA98F" }}>
                        {service.icon}
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mb: 1, color: "#666" }}
                      >
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={4}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "10px",
            marginTop: "1.5rem",
          }}
        />

        <button
          onClick={handleCommentSubmit}
          style={{
            backgroundColor: "#1BA98F",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sharh qo'shish
        </button>

        <div style={{ marginTop: "20px" }}>
          <h3>Sharhlar:</h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              position: "relative",
            }}
          >
            {comments.map((comment, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#f1f1f1",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              >
                {comment}
                <button
                  onClick={() => handleCommentDelete(index)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px",
                    position: "absolute",
                    left: "93%",
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClickDetail;
