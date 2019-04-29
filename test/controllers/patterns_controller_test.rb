require 'test_helper'

class PatternsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pattern = patterns(:one)
  end

  test "should get index" do
    get patterns_url, as: :json
    assert_response :success
  end

  test "should create pattern" do
    assert_difference('Pattern.count') do
      post patterns_url, params: { pattern: { name: @pattern.name, stitches: @pattern.stitches } }, as: :json
    end

    assert_response 201
  end

  test "should show pattern" do
    get pattern_url(@pattern), as: :json
    assert_response :success
  end

  test "should update pattern" do
    patch pattern_url(@pattern), params: { pattern: { name: @pattern.name, stitches: @pattern.stitches } }, as: :json
    assert_response 200
  end

  test "should destroy pattern" do
    assert_difference('Pattern.count', -1) do
      delete pattern_url(@pattern), as: :json
    end

    assert_response 204
  end
end
