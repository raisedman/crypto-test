# Create image
docker build -t crypto-price-api .

# Start container
docker run -p 3000:3000 crypto-price-api