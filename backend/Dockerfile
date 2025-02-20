FROM ruby:3.2.0

ARG RAILS_ENV
ARG RAILS_MASTER_KEY

ENV RAILS_ENV=$RAIS_ENV
ENV RAILS_MASTER_KEY=$RAILS_MASTER_KEY
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
RUN env

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN gem install bundler -v 2.3.26
RUN bundle install

COPY . /app

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3002

CMD ["rails", "server", "-b", "0.0.0.0"]