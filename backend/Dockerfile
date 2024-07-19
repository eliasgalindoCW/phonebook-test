# backend/Dockerfile

# Use an official ruby image as the base image
FROM ruby:2.7-alpine

# Install dependencies
RUN apk add --no-cache build-base nodejs postgresql-dev tzdata

# Set the working directory
WORKDIR /app

# Copy the Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install the gems
RUN bundle install

# Copy the rest of the application code
COPY . .

# Precompile assets
RUN bundle exec rake assets:precompile

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["rails", "server", "-b", "0.0.0.0"]
