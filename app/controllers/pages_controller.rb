class PagesController < ApplicationController
  def index
  end

  def episodes
    @episodes = Episode.all
    @section = Section.first
    @course = Course.first
    render json: {episodes: @episodes, section: @section, course: @course}
  end
end
