class PostsController < ApplicationController
  def index
    posts = Post.all.order(created_at: :asc)
    render json: posts, status: :ok
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: Post.all.order(created_at: :asc), status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:name)
  end
end
