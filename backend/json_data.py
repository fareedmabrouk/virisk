
def riskData(address, overall, area, busy, mask, distancing):
    return {
        "address": address,
        "overall_rating": overall,
        "area_rating": area,
        "busyness_rating": busy,
        "mask_wearing": mask,
        "social_distancing": distancing
    }

print(riskData("4016", 3.2, 3.5, 3.5, 4.5, 8.0))